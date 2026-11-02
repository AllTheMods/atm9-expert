// kubejs/server_scripts/spark_guard.js
//
// spark 1.10.53 + Java 25 on Linux/macOS: bundled async-profiler segfaults.
// Rewrites "/spark profiler start ..." (and shorthand "/spark profiler --timeout ...")
// to append --force-java-sampler. Harmless on Windows.
//
// Fix vs. previous version: Commands.performCommand in 1.20.1 takes
// (ParseResults<CommandSourceStack>, String), NOT (CommandSourceStack, String).

ServerEvents.command(event => {
    if (event.commandName !== 'spark' && event.commandName !== 'sparkc') return;

    // Normalise to a JS string once
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
    // NOTE: declared outside try{} on purpose. KubeJS Rhino throws
    // "redeclaration of var" for const/let declared inside try blocks.
    let sgParsed = null;

    // Path 1: official path (fires events, handles errors/feedback itself)
    try {
        sgParsed = sgCommands.getDispatcher().parse(sgCmd, sgSrc);
        sgCommands.performCommand(sgParsed, sgCmd);
        sgOk = true;
    } catch (e) {
        console.log('[spark_guard] performCommand failed: ' + e);
    }

    // Path 2: raw Brigadier fallback (no Minecraft method names involved)
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

    // Cancel original ONLY if the safe version actually ran.
    // If both paths failed, letting the original through would crash the server,
    // so cancel regardless, but the log above tells you why.
    event.cancel();
});
