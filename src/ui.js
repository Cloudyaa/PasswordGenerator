let charQtyInput = document.getElementById('char-qty');
const generateBtn = document.querySelector('.generate-btn');
const generatedPassword = document.querySelector('.generated-password');
const alert = document.querySelector('.copy-alert');

generateBtn.addEventListener('click', e => {
    e.preventDefault();
    const charQty = Number(charQtyInput.value);
    const password = new PasswordGenerator(charQty);
    generatedPassword.innerText = password.generate();
    charQtyInput.value = 8;
})

const changeValue = change => {
    if (change === 1 && charQtyInput.value < 30) {
        charQtyInput.value++;
    } else if (change === -1 && charQtyInput.value > 8) {
        charQtyInput.value--;
    }
}


const copyToClipboard = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText){
        alert.classList.add('visible');
        const hideAlert = () => {
            alert.classList.remove('visible');
            clearTimeout(timeout);
        };

        const timeout = setTimeout(hideAlert, 2000);
        return navigator.clipboard.writeText(str);
    } else return Promise.reject('The Clipboard API is not available.');
};


