class native_func {
    constructor(name, offset, baseAddress) {
        this.name = name;
        this.offset = offset;
        this.ghidraBase = 0x10000;
        this.baseAddress = baseAddress;
    }
    realAddress() {
        return this.baseAddress.add(this.offset).sub(this.ghidraBase);
    }
}


function toan() {
    Java.perform(function () {
        console.log('\n[*] Starting script');

        // const jnz = Module.getBaseAddress('libfrida0xb.so');
        // const getFlag = new native_func('Java_com_ad2001_frida0xb_MainActivity_getFlag', 0x00020e2a, jnz);
        const jnz = Module.findExportByName('libfrida0xb.so', 'Java_com_ad2001_frida0xb_MainActivity_getFlag').add(0x170CE).sub(0x170B0);
        console.log(jnz);
        Memory.protect(jnz, 0x1000, 'rwx');
        console.log("ded")
        var writer = new X86Writer(jnz);
        try {

            writer.putNop()
            writer.putNop()
            writer.putNop()
            writer.putNop()
            writer.putNop()
            writer.putNop()

            writer.flush();

        } finally {

            writer.dispose();
        }
        console.log('\n[*] Frida 0xB bypassed');
    });
}
function toan1() {
    Java.perform(() => {
        var jnz = Module.getBaseAddress("libfrida0xb.so").add(0x170CE);
        console.log(jnz)
        Memory.protect(jnz, 0x1000, "rwx");
        var writer = new X86Writer(jnz);

        try {
            writer.putNop();
            writer.putNop();
            writer.putNop();
            writer.putNop();
            writer.putNop();
            writer.putNop();

            writer.flush();

        } finally {

            writer.dispose();
        }
    });
}
setTimeout(toan, 1000);