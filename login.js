const passwordInput = document.querySelector('#password')
const passYes = document.querySelector('.passYes')
const passNo = document.querySelector('.passNo')
const loginButton = document.querySelector('.loginButton')
const emailInput = document.querySelector('#email')
const error = document.querySelector('.errorMessege')
const errorP = document.querySelector('.errorMessege p')

const user_Username = ['gasparboss', 'shawtyy']
const user_Password = ['gasparboss123', 'shawtyyboss123']


passNo.addEventListener('click', function(){
    passNo.style.display = 'none'
    passYes.style.display = 'block'
    passwordInput.type = 'text'
})

passYes.addEventListener('click', () => {
    passYes.style.display = 'none'
    passNo.style.display = 'block'
    passwordInput.type = 'password'
})



/* loginButton.addEventListener('click', () =>{
    for (let i = 0; i < user_Username.length; i++){
        if (emailInput.value === user_Username[i]){
            error.style.display = 'flex'
            error.style.backgroundColor = 'green'
        } else{
            error.style.display = 'flex'
            error.style.backgroundColor = 'red'
        }
    }
}) */

loginButton.addEventListener('click', () =>{
    let found = false;
    let i = 0
    
    if (emailInput.value.length !== 0){
        while (i < user_Username.length){
            if (emailInput.value === user_Username[i]){
                found = true
            }
            i += 1
        }
        if (found) {
            null
    
        } else {
            errorP.innerHTML = 'Helytelen felhasználónév vagy jelszó.'
            error.style.display = 'flex'
        }
    } else {
        error.style.display = 'none'
    }
   
});


