setTimeout(() => {Java.performNow(function() {
    Java.choose('com.ad2001.frida0x5.MainActivity', {
        onMatch: function(instance) { // "instance" is the instance for the MainActivity
          console.log("Instance found");
          instance.flag(1337); // Calling the function
      },
      onComplete: function() {}
    });
  })},1000);
  // FRIDA{ON_MATCH_THIS_INSTANCE}
