const h3 = document.querySelector('.rHeader h3');
const rHeader = document.querySelector('.rHeader')
const email = document.querySelector('.email')
const registrationWindow = document.querySelector('.registration-window')
const email_input = document.querySelector('.email-Input')
const resume = document.querySelector('.resume')
const error_Messege = document.querySelector('.errorMessege')


h3.style.display = 'block';
let welcome = 'Üdvözöllek!';
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


let passwordJSON = localStorage.getItem('user_Password')
let emailJSON = localStorage.getItem('user_Email')
let usernameJSON = localStorage.getItem('user_Username')

/* JSON File convertálása JS listává */

let user_Username = JSON.parse(usernameJSON)
let user_Email = JSON.parse(emailJSON)
let user_Password = JSON.parse(passwordJSON)




setTimeout(() => {
    rHeader.style.marginBottom = '0'

    for (let i = 0; i < welcome.length; i++) {
        setTimeout(() => {
            h3.innerText += welcome[i];
        }, i * 100);
    }
    setTimeout(() => {
        rHeader.style.marginBottom = ''
        email.style.display = 'flex'
    }, 1500);

    email_input.addEventListener('focusout', () => {
        if (email_input.value.length > 0 && emailPattern.test(email_input.value) && !user_Email.includes(email_input.value)) {
            resume.style.border = '1px solid green'
            resume.style.color = 'green'
            error_Messege.style.display = ''

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
            if (!emailPattern.test(email_input.value) && email_input.value.length > 0 || user_Email.includes(email_input.value)) {
                error_Messege.style.display = 'flex'
            } else {
                error_Messege.style.display = ''
            }
        }
    })

}, 500);
