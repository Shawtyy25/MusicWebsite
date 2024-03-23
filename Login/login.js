
const passwordInput = document.querySelector('#password')
const passYes = document.querySelector('.passYes')
const passNo = document.querySelector('.passNo')
const loginButton = document.querySelector('.loginButton')
const emailInput = document.querySelector('#email')
const error = document.querySelector('.errorMessege')
const errorP = document.querySelector('.errorMessege p')
const emailError = document.querySelector('.emailError')
const emailErrorDiv = document.querySelector('.errorFromemail')
const passErrorDiv = document.querySelector('.errorFrompass')
const passError = document.querySelector('.passError')

const user_Email = ['gaspardani719@gmail.com', 'abelszolnoki@gmail.com']
const user_Username = ['gasparboss', 'shawtyy']
const user_Password = ['adminG123', 'adminS123']

let pressCount = 0
let emailInputCount = false
let passInputCount = false

passNo.addEventListener('click', function () {
    passNo.style.display = 'none'
    passYes.style.display = 'block'
    passwordInput.type = 'text'
})

passYes.addEventListener('click', () => {
    passYes.style.display = 'none'
    passNo.style.display = 'block'
    passwordInput.type = 'password'
})

loginButton.addEventListener('click', () => {
    emailInput.disabled = false
    passwordInput.disabled = false
    let found = false;
    let i = 0

    if (emailInput.value.length !== 0 && passwordInput.value.length !== 0) {
        while (i < user_Username.length) {
            if ((emailInput.value === user_Username[i] || emailInput.value == user_Email[i]) && passwordInput.value === user_Password[i]) {
                found = true
            }
            i += 1
        }
        if (found) {
            error.style.display = 'none'
            window.location.href = '../Main/main.html'

        } else {
            errorP.innerHTML = 'Helytelen felhasználónév vagy jelszó.'
            error.style.display = 'flex'
            pressCount += 1
            console.log(pressCount)
        }
    } else {
        error.style.display = 'none'
    }
    if (pressCount === 5) {
        pressCount = 0
        emailInput.disabled = true
        passwordInput.disabled = true
        loginButton.style.pointerEvents = 'none'
        loginButton.style.transition = ''

        /* Számláló a letiltási időről */
        let time = 60
        errorP.innerHTML = time + ' másodperc múlva újra próbálkozhatsz'

        let timer = setInterval(() => {
            time--
            console.log(time)
            errorP.innerHTML = time + ' másodperc múlva újra próbálkozhatsz'
            
            if (time < 1) {
                clearInterval(timer)
                error.style.display = 'none'
                emailInput.value = ''
                passwordInput.value = ''
                emailInput.disabled = false
                passwordInput.disabled = false
                loginButton.style.pointerEvents = 'all'
            }
        }, 1000)

        console.log('teszt')

    }
})
emailInput.addEventListener('blur', () => {
    if (emailInput.value.length > 0 && !emailInputCount) {
        emailInputCount = true
        console.log(emailInputCount)
    }
})
passwordInput.addEventListener('blur', () => {
    if (passwordInput.value.length > 0 && !passInputCount) {
        passInputCount = true
        console.log(passInputCount)
    }
})


emailInput.addEventListener('focusout', () => {
    if (emailInput.value === '' && emailInputCount) {
        emailInput.style.boxShadow = ''
        emailErrorDiv.style.display = 'flex'
        emailInput.style.border = '1px solid red'
        emailError.innerHTML = 'Add meg a felhasználóneved vagy e-mail címed.'

        emailInput.addEventListener('focus', () => {
            emailInput.style.boxShadow = '0px 0px 1px 2px red inset'

        })
    } else {
        emailInput.addEventListener('focus', () => {
            emailInput.style.boxShadow = '0px 0px 1px 2px white inset'
        })
        emailInput.style.boxShadow = ''
        emailErrorDiv.style.display = ''
        emailInput.style.border = ''
    }
})

passwordInput.addEventListener('focusout', () => {
    if (passwordInput.value === '' && passInputCount) {
        passwordInput.style.boxShadow = ''
        passErrorDiv.style.display = 'flex'
        passwordInput.style.border = '1px solid red'
        passError.innerHTML = 'Add meg a jelszavad.'

        passwordInput.addEventListener('focus', () => {
            passwordInput.style.boxShadow = '0px 0px 1px 2px red inset'
        })
    } else {
        passwordInput.addEventListener('focus', () => {
            passwordInput.style.boxShadow = '0px 0px 1px 2px white inset'
        })
        passwordInput.style.boxShadow = ''
        passErrorDiv.style.display = ''
        passwordInput.style.border = ''
    }
})




