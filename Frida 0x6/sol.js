function runhere() {
    Java.performNow(() => {
        let MainActivity = Java.use("com.ad2001.frida0x6.MainActivity");
        MainActivity["get_flag"].implementation = function (A) {
            console.log(`MainActivity.get_flag is called: A1=${A.num1} A1=${A.num2}`);
            this["get_flag"](A);
        };
        var checker = Java.use('com.ad2001.frida0x6.Checker');
        var checkerInstance = checker.$new();
        checkerInstance.num1.value = 1234;
        checkerInstance.num2.value = 4321;

        Java.choose('com.ad2001.frida0x6.MainActivity', {
            onMatch: function (instance) {// "instance" is the instance for the MainActivity
                console.log("Instance found");
                instance.get_flag(checkerInstance); // Calling the function
            },
            onComplete: function () { }
        });
    })
}

setTimeout(runhere, 2000);
//FRIDA{INSTANCES_AND_INSTANCES}