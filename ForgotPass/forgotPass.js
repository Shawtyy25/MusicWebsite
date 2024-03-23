
const button = document.querySelector('.button')
const emailInput = document.querySelector('#email')
const usernInput = document.querySelector('#usernInput')
const errorDiv = document.querySelector('.errorDiv')
const error = document.querySelector('.error')
const passShowDiv = document.querySelector('.passShowDiv')
const passMessage = document.querySelector('.passmessage')
const message = document.querySelector('.message')
const main = document.querySelector('main')

const user_Email = ['gaspardani719@gmail.com', 'abelszolnoki@gmail.com']
const user_Username = ['gasparboss', 'shawtyy']
const user_Password = ['adminG123', 'adminS123']

let count = 0

button.addEventListener('click', () =>{
    let i = 0
    let found = false
    
    if (emailInput.value.length !== 0 && usernInput.value.length !== 0){
        while (i < user_Email.length) {
            if (emailInput.value === user_Email[i] && usernInput.value === user_Username[i]) {
                found = true
                
            }
            i += 1
        }
        if (found) {
            passShowDiv.style.display = 'block'
            message.style.marginTop = '-200px'
            message.style.transitionDelay = '2s'
            message.style.transition = 'transform 1s, margin-top .1s'
            main.style.paddingBottom = '0'

            setTimeout(() => {
                message.style.transform = 'translateY(0)'
                message.style.marginTop = '0'    
            }, 20);
            
            for (let i of user_Email) {
                if (i === emailInput.value) {
                    passMessage.innerHTML = user_Password[count]
                    
                } 
                count += 1                
            }
            
            errorDiv.style.display = 'none'
            emailInput.style.border = ''
            usernInput.style.border = ''
            emailInput.addEventListener('focus', () => {
                emailInput.style.boxShadow = ''
            })
            emailInput.addEventListener('focusout', () => {
                emailInput.style.boxShadow = ''
            })
            usernInput.addEventListener('focus', () => {
                usernInput.style.boxShadow = ''
            })
            usernInput.addEventListener('focusout', () => {
                usernInput.style.boxShadow = ''
            })
            

        } else {
            emailInput.addEventListener('focus', () => {
                emailInput.style.boxShadow = '0px 0px 1px 2px red inset'
            })
            emailInput.addEventListener('focusout', () => {
                emailInput.style.boxShadow = ''
            })
            usernInput.addEventListener('focus', () => {
                usernInput.style.boxShadow = '0px 0px 1px 2px red inset'
            })
            usernInput.addEventListener('focusout', () => {
                usernInput.style.boxShadow = ''
            })
            errorDiv.style.display = 'flex'
            error.innerHTML = 'Az e-mail-cím és a felhasználónév nem egyezik.'
            emailInput.style.border = '1px solid red'
            usernInput.style.border = '1px solid red'
            
        }
    }
    
})

if (passMessage) {
    passMessage.addEventListener('click', () => {
        localStorage.setItem('getPassword' , passMessage.innerHTML)
        window.location.href = '/Login/Login.html'
    })
    
}

