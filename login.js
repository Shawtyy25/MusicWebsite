const passwordInput = document.querySelector('#password')
const passYes = document.querySelector('.passYes')
const passNo = document.querySelector('.passNo')

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