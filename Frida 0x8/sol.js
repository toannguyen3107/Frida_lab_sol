function toan_run() {
    Java.perform(function() {
        Interceptor.attach(Module.getExportByName("libc.so", "strcmp"), {
            onEnter: function(args) {
                var arg0 = Memory.readUtf8String(args[0]);
                if (arg0.includes('toan')){
                    console.log(`pass: ${Memory.readUtf8String(args[1])}`);
                }
            },
            onLeave: function(retval){

            }

        });
    });
}

setTimeout(toan_run, 0);
// FRIDA{NATIVE_LAND}
