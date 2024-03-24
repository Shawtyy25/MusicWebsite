const h3 = document.querySelector('.rHeader h3');
const rHeader = document.querySelector('.rHeader')
const email = document.querySelector('.email')
const registrationWindow = document.querySelector('.registration-window')
const email_input = document.querySelector('.email-Input')
const resume = document.querySelector('.resume')

h3.style.display = 'block';
let welcome = 'Üdvözöllek!';
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


setTimeout(() => {
    rHeader.style.marginBottom = '0'
    
    for (let i = 0; i < welcome.length; i++) {
        console.log(i)
        setTimeout(() => {
            h3.innerText += welcome[i]; 
        }, i * 100); 
    }
    setTimeout(() => {
        rHeader.style.marginBottom = ''
        email.style.display = 'flex'
    }, 1500);    
    
    email_input.addEventListener('focusout', () => {
        if (email_input.value.length > 0 && emailPattern.test(email_input.value)) {
            resume.style.border = '1px solid green'
            resume.style.color = 'green'

            resume.addEventListener('mouseover', () => {
                resume.style.border = '1px solid rgb(6, 255, 6)'
                resume.style.color = 'rgb(6, 255, 6)'
            })
            resume.addEventListener('mouseout', () => {
                resume.style.border = '1px solid green'
                resume.style.color = 'green'
            })
        }
        else {
            resume.style.border = ''
            resume.style.color = ''
        }
    })
    
}, 500);
