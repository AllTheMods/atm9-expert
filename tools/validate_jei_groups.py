"""Validate pack group definitions; optionally check explicit IDs against installed JAR assets.

Usage: python tools/validate_jei_groups.py --instance "path/to/Prism/instance"
Asset checks are not a substitute for testing JEI's live ingredient registry.
"""

import argparse
import json
from pathlib import Path
import re
import tomllib
import zipfile


ROOT = Path(__file__).resolve().parents[1]
GROUPS = ROOT / "config/jei_plus_plus/stack_groups"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--instance", type=Path)
    args = parser.parse_args()
    groups = []
    ids = set()
    for path in sorted(GROUPS.glob("*.json")):
        data = json.loads(path.read_text(encoding="utf-8"))
        assert isinstance(data["groups"], list), path
        for group in data["groups"]:
            assert re.fullmatch(r"[a-z0-9_]+:[a-z0-9_/]+", group["id"]), group
            assert group["id"] not in ids, f"Duplicate group: {group['id']}"
            ids.add(group["id"])
            assert group["enabled"] is True, group
            assert isinstance(group["priority"], int), group
            assert isinstance(group["name"], str) and group["name"], group
            if group["type"] == "jei_plus_plus:regex":
                re.compile(group["regex"])
            else:
                assert group["type"] == "jei_plus_plus:group", group
                assert group["contents"], group
                for entry in group["contents"] + group.get("exclusions", []):
                    assert re.fullmatch(r"#?[a-z0-9_]+:[a-z0-9_/]+", entry), entry
            groups.append(group)

    config = tomllib.loads((ROOT / "config/jei_plus_plus-client.toml").read_text(encoding="utf-8"))
    assert config["stackGroupingEnabled"] and config["jsonGroupingEnabled"]
    assert config["tagGroupingEnabled"]
    assert not config["nbtGroupingEnabled"]
    assert not any(config["defaultGroups"].values())

    def regex_matches(item):
        return [g["id"] for g in groups if g["type"] == "jei_plus_plus:regex"
                and re.fullmatch(g["regex"], item)]

    # Dynamic GT IDs are generated at startup rather than shipped as item model JSON.
    # Check suffix collisions and powered-tool formats taken from installed GTToolType.
    cases = {
        "gtceu:iron_hammer": "gt/tools/hammer",
        "gtceu:steel_mining_hammer": "gt/tools/mining_hammer",
        "gtceu:steel_knife": "gt/tools/knife",
        "gtceu:steel_butchery_knife": "gt/tools/butchery_knife",
        "gtceu:lv_steel_drill": "gt/tools/drill",
        "gtceu:hv_tungsten_steel_wire_cutter": "gt/tools/wire_cutter",
        "gtceu:iv_tungsten_steel_screwdriver": "gt/tools/screwdriver",
        "gtceu:copper_single_cable": "gt/cable/single",
        "gtceu:yttrium_barium_cuprate_hex_wire": "gt/wire/hex",
        "gtceu:sulfuric_acid_bucket": "gt/fluid_buckets",
        "ad_astra:mars_ostrum_ore": "ores/mars",
        "allthecompressed:cobblestone_9x": "compressed/blocks",
    }
    for item, expected in cases.items():
        assert regex_matches(item) == ["atm9expert:" + expected], (item, regex_matches(item))
    for item in ["gtceu:iron_hammer_head", "gtceu:lv_wiremill", "minecraft:iron_axe",
                 "gtceu:mercury_dust", "productivebees:upgrade_comb_block",
                 "productivebees:advanced_comb_canvas_beehive", "allthecompressed:atm_star"]:
        assert not regex_matches(item), (item, regex_matches(item))

    print(f"Validated {len(groups)} groups in {len(list(GROUPS.glob('*.json')))} JSON files.")
    print("TOML and dynamic GT matching/collision checks passed.")
    if args.instance:
        mc = args.instance / "minecraft"
        if not mc.is_dir():
            mc = args.instance
        assets = set()
        for jar in (mc / "mods").glob("*.jar"):
            with zipfile.ZipFile(jar) as archive:
                for name in archive.namelist():
                    match = re.fullmatch(r"assets/([^/]+)/models/item/([^/]+)\.json", name)
                    if match:
                        assets.add(f"{match[1]}:{match[2]}")
        assert assets, f"No installed item models found in {mc / 'mods'}"
        explicit = {entry for g in groups for entry in g.get("contents", []) if not entry.startswith("#")}
        missing = explicit - assets
        assert not missing, f"Explicit item IDs without a model asset: {sorted(missing)}"
        for group in groups:
            if group["type"] != "jei_plus_plus:regex" or group["id"].startswith("atm9expert:gt/"):
                continue
            hits = sorted(item for item in assets if re.fullmatch(group["regex"], item))
            assert hits, f"No model assets matched: {group['id']}"
            print(f"{group['id']}: {len(hits)} item model assets")
        print(f"Verified model assets for {len(explicit)} explicit item IDs.")
        assert not list((mc / "mods").glob("collapsible_groups*.jar")), "Collapsible Groups still enabled"
        for relative in ["config/jei_plus_plus-client.toml", "kubejs/client_scripts/jei_hide.js"]:
            assert (ROOT / relative).read_bytes() == (mc / relative).read_bytes(), relative
        for path in GROUPS.glob("*.json"):
            assert path.read_bytes() == (mc / "config/jei_plus_plus/stack_groups" / path.name).read_bytes(), path
        print("Installed pack files match the repository; Collapsible Groups is disabled.")


if __name__ == "__main__":
    main()
