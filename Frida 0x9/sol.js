function toan_run(){
    Java.perform(() =>{
        Interceptor.attach(Module.getExportByName('liba0x9.so', 'Java_com_ad2001_a0x9_MainActivity_check_1flag'),{
            onEnter: function(args){},
            onLeave: function(retval){
                console.log('flag: ' + retval.toInt32());
                retval.replace(1337);
            }
        })
    });
}
setTimeout(toan_run, 1000);

// FRIDA{NATIVE_LAND_0x2}