# Targeted JEI++ groups

Use the existing JEI++ 1.0.8a integration to collapse selected ingredient families. This configuration adds 136 rules in `config/jei_plus_plus/stack_groups/` and enables `stackGroupingEnabled`. Built-in suffix groups remain disabled, and global automatic NBT grouping remains disabled, so only the explicit pack groups are enabled.

| Family | Grouping |
| --- | --- |
| Apotheosis / Iron's Spells gems | Combined gem variants |
| Iron's Spells scrolls | Spell and level variants |
| GregTech tools | 24 tool types, including electric variants |
| GregTech cables / wires | Separate 1x, 2x, 4x, 8x and 16x cross-sections |
| GregTech buckets | Fluid bucket variants |
| Dust | Regular, small and tiny piles by Forge tags |
| Ad Astra ores | Planet-specific block IDs for Moon, Mars, Mercury, Venus and Glacio |
| All The Compressed | All compressed block tiers |
| Gene samples | Separate Productive Bees and Gendustry groups |
| Productive Bees | Separate honeycomb and comb-block groups |
| Reliquary | Charm fragment variants |
| Sophisticated Storage | Chests and barrels separately by tier, combining wood/color variants |
| Tinkers' Construct | 28 part shapes and 45 equipment types, each combining material/NBT variants |

The existing KubeJS hide filter now allows GTToolItem instances and GT fluid buckets through so they can appear in these groups. Recipes are unchanged.

JEI++ disables its own grouping when Collapsible Groups or another recognized grouping addon is installed. Use a single grouping implementation; this change does not add another mod. See the [JEI++ documentation](https://github.com/lingmu0/jei-plus-plus/blob/1.20.1/README.md).

Iron's Spells integration gems use `apotheosis:gem`; the installed JSON matcher cannot distinguish their individual NBT gem IDs, so they share a group with Apotheosis gems. Planet groups cover native Ad Astra planet-specific IDs, not every GT ore available on a planet. Shared GT ore IDs do not identify their source dimension; deepslate IDs without a planet prefix are not assigned to a planet. Mercury has only one native ore model and may not produce a collapsible group. Impure and purified dusts are excluded from the three dust groups. Forestry capsules and other unlisted families are not grouped by this configuration.

Tinkers IDs were collected from the installed mod's parts and modifiable item tags; technical fake ingot/storage-block items are excluded. New materials of existing types are covered automatically; new item types require a new rule.

## Validation

Run `python tools/validate_jei_groups.py` with Python 3.11+. An optional `--instance` argument accepts a Prism instance path and checks installed model assets, deployment parity and the absence of an active Collapsible Groups JAR. Deployment parity expects this branch's files to be installed unchanged.

JSON/TOML, unique group IDs, representative dynamic GT patterns and suffix collision checks passed. Installed model checks found all 90 explicit item IDs and 981 compressed block models. Model counts do not represent JEI's live ingredient count.

In-game verification is pending. Restart the client, check KubeJS/JEI logs, expand and collapse groups, search individual members, and open recipes/usages. Verify that GT tools and buckets are visible while unrelated existing hide rules still apply.
