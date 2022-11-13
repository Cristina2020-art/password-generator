const generateBtn = document.querySelector('#generate-btn');
const input = document.querySelector('#input');
const copyBtn = document.querySelector('#copy');
const copyAlert = document.querySelector('#alert');

generateBtn.addEventListener('click', () => {
    createPassword()
    if(copyAlert.classList.contains('active')){
        copyAlert.classList.remove('active');
    }
});

copyBtn.addEventListener('click', () => {
    copyPassword();
    copyAlert.classList.add('active');
})

function createPassword(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?"
    const passwordLength = 10;
    let password = "";
    for(let i=0; i < passwordLength; i++){
        let randomNum = Math.floor(Math.random() * characters.length)
        password += characters.substring(randomNum, randomNum + 1);
    }
    input.value = password;
    copyAlert.textContent = password + " copied!"
}

function copyPassword(){
    navigator.clipboard.writeText(input.value);
}