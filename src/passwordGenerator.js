class PasswordGenerator {
    constructor(charQty) {
        this.chars = [];
        // range from char no 33 = '!' to no 126 = '~'
        for (let i = 33; i <= 126; i++) {
            this.chars.push(String.fromCharCode(i));
        }
        this.howMany = charQty;
    }

    generate() {
        let newPassword = '';
        for (let i = 0; i < this.howMany; i++) {
            const index = Math.round(Math.random() * (this.chars.length - 1));
            const newChar = this.chars[index];
            newPassword += newChar;
        }
        return newPassword;
    }
}
