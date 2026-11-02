// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// kubejs/server_scripts/spark_guard.js
//
// spark 1.10.53 + Java 25 on Linux/macOS: bundled async-profiler segfaults.
// Rewrites "/spark profiler start ..." (and shorthand "/spark profiler --timeout ...")
// to append --force-java-sampler.

ServerEvents.command(event => {
    if (event.commandName !== 'spark' && event.commandName !== 'sparkc') return;

    const sgInput = String(event.input);

    // Loop guard: performCommand re-fires this event for the rewritten command
    if (sgInput.indexOf('--force-java-sampler') !== -1) return;

    const sgMatch = sgInput.match(/profiler\s+(.*)$/);
    if (!sgMatch) return;

    const sgFirst = sgMatch[1].trim().split(/\s+/)[0] || '';

    // Only intercept start (explicit "start" or shorthand starting with a flag)
    if (sgFirst !== 'start' && sgFirst.indexOf('-') !== 0) return;

    const sgSrc = event.parseResults.getContext().getSource();
    const sgCmd = String(sgInput + ' --force-java-sampler');
    const sgCommands = sgSrc.getServer().getCommands();

    let sgOk = false;
    let sgParsed = null;

    try {
        sgParsed = sgCommands.getDispatcher().parse(sgCmd, sgSrc);
        sgCommands.performCommand(sgParsed, sgCmd);
        sgOk = true;
    } catch (e) {
        console.log('[spark_guard] performCommand failed: ' + e);
    }

    if (!sgOk) {
        try {
            sgCommands.getDispatcher().execute(sgCmd, sgSrc);
            sgOk = true;
        } catch (e) {
            console.log('[spark_guard] dispatcher.execute failed: ' + e);
        }
    }

    if (sgOk) {
        try {
            sgSrc.sendSystemMessage(Text.of('[spark_guard] Using Java sampler (async-profiler crashes on Java 25).'));
        } catch (e) { /* best effort */ }
    }

    event.cancel();
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9 Expert.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
