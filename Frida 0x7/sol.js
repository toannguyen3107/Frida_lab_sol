function toan_runhere() {
    Java.perform(() => {
        var Checker = Java.use('com.ad2001.frida0x7.Checker');
        var CheckerInstance = Checker.$new(1000, 1001);
        var MainActivity = Java.use('com.ad2001.frida0x7.MainActivity');
        MainActivity.flag.implementation = function (A) {
            console.log('\n[*] Starting bypass...');
            this["flag"](CheckerInstance);
            console.log(`[-] ${CheckerInstance.num1.value} - ${CheckerInstance.num2.value}`);
            console.log('\n[*] Bypass done!');
        }
    });
}

setTimeout(toan_runhere, 0);
//FRIDA{HOOKING_CONSTRUCTORS}