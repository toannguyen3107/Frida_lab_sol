Java.perform(()=> {
    let MainActivity = Java.use("com.ad2001.frida0x1.MainActivity");
    MainActivity["get_random"].implementation = function () {
        console.log(`MainActivity.get_random is called`);
        let result = this["get_random"]();

        console.log(`MainActivity.get_random result=${result* 2 + 4}`);
        return result;
    };
})
// FRIDA{BABY_HOOK_0X1}