

function toan() {
    Java.performNow(function () {
        // Find the native library
        console.log('\n[+] Looking for libfrida0xa.so...');
        const moduleName = 'libfrida0xa.so';
        console.log('\t[-] Base addr: ' + Module.getBaseAddress(moduleName));
        var adr = Module.getExportByName(moduleName,'_Z8get_flagii');
        console.log('\t[-] func addr: ' + adr);
        // Find the native function in the library
        var nativeFunc = new NativeFunction(ptr(adr),'void',  ['int', 'int']);
        // Call the native function
        nativeFunc(1, 2);
        console.log('\n[+] Done')
    });
}
setTimeout(toan, 2000);