setTimeout(() => {
    Java.perform(() => {
        var checker = Java.use('com.ad2001.frida0x3.Checker');
        for (var i = 0; i < 256; i++){
            checker.increase();
        }
    })
}, 100);

// frida{inject_and_inspect}