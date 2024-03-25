const h3 = document.querySelector('.rHeader h3');
const rHeader = document.querySelector('.rHeader')
const email = document.querySelector('.email')
const emailForm = document.querySelector('.emailForm')
const registrationWindow = document.querySelector('.registration-window')
const email_input = document.querySelector('.email-Input')
const resume = document.querySelector('.resume')
const error_Messege = document.querySelector('.errorMessege')
const username = document.querySelector('.username')
const correct  = document.querySelector('.correct')
const correct_U  = document.querySelector('.correct-U')
const arrow = document.querySelector('.arrow')
const arrow_U = document.querySelector('.arrow-U')
const usernameInput = document.querySelector('.username-Input')
const resume_U = document.querySelector('.resume-U')
const mistake = document.querySelector('.mistake')
const mistake_U = document.querySelector('.mistake-U')

h3.style.display = 'block'
let welcome = 'Üdvözöllek'
let test = ' a soundon!'
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


let passwordJSON = localStorage.getItem('user_Password')
let emailJSON = localStorage.getItem('user_Email')
let usernameJSON = localStorage.getItem('user_Username')

/* JSON File convertálása JS listává */

let user_Username = JSON.parse(usernameJSON)
let user_Email = JSON.parse(emailJSON)
let user_Password = JSON.parse(passwordJSON)
/* json end */




if (email_input.value.length === 0) {
    resume.style.border = ''
    resume.style.color = ''
    error_Messege.style.display = 'none'
    correct.style.display = 'none'
    arrow.style.display = 'block'
    resume.addEventListener('mouseover', () => {
        resume.style.border = ''
        resume.style.color = ''
    })
    resume.addEventListener('mouseout', () => {
        resume.style.border = ''
        resume.style.color = ''
    })
}


setTimeout(() => {
    rHeader.style.marginBottom = '0'

    for (let i = 0; i < welcome.length; i++) {
        setTimeout(() => {
            h3.innerText += welcome[i];
        }, i * 80);
    }
    setTimeout (() => {
        for (let i = 0; i < test.length; i++) {
            setTimeout(() => {
                h3.innerHTML += test[i]
            }, i * 80)
        }
    }, 800)

    setTimeout(() => {
        rHeader.style.marginBottom = ''
        email.style.display = 'flex'
        email_input.select()
        email_input.focus()
        emailForm.style.marginBottom = '0'
    }, 2100);

    email_input.addEventListener('focusout', () => {
        if (email_input.value.length > 0 && emailPattern.test(email_input.value) && !user_Email.includes(email_input.value)) {
            resume.style.border = '1px solid rgb(40, 200, 6)'
            resume.style.color = 'rgb(40, 200, 6)'
            error_Messege.style.display = ''

            resume.addEventListener('mouseover', () => {
                resume.style.border = '1px solid rgb(6, 255, 6)'
                resume.style.color = 'rgb(6, 255, 6)'
            })
            resume.addEventListener('mouseout', () => {
                resume.style.border = '1px solid rgb(40, 200, 6)'
                resume.style.color = 'rgb(40, 200, 6)'
            })

            resume.addEventListener('click', () => {
                emailForm.style.marginBottom = ''
                username.style.display = 'flex'
                correct.style.display = 'block'
                arrow.style.display = 'none'
                resume.style.opacity = '0'
                email_input.style.border = 'none'
                usernameInput.style.border = ''
                usernameInput.focus()
                usernameInput.select()
                
                email_input.addEventListener('focus', () => {
                    resume.style.opacity = ''
                    email_input.style.border = ''
                    arrow.style.display = ''
                    correct.style.display = 'none'
                })
                email_input.addEventListener('focusout', () => {
                    resume.style.opacity = '0'
                    email_input.style.border = 'none'
                    arrow.style.display = 'none'
                    correct.style.display = 'block'

                    if(email_input.value.length > 0 && emailPattern.test(email_input.value) && !user_Email.includes(email_input.value)) {
                        correct.style.display = 'block'
                        mistake.style.display = ''
                        arrow.style.display = 'none'
                        email_input.addEventListener('focus', () => {
                            arrow.style.display = ''
                            correct.style.display = 'none'
                        })
                    } else {
                        correct.style.display = ''
                        mistake.style.display = 'block'
                        arrow.style.display = 'none'
                        email_input.addEventListener('focus', () => {
                            arrow.style.display = ''
                            mistake.style.display = ''
                        })
                    }
                })
                usernameInput.addEventListener('focus', () => {
                    resume_U.style.opacity = ''
                    usernameInput.style.border = ''
                    arrow_U.style.display = 'block'
                    correct_U.style.display = ''
                })
                usernameInput.addEventListener('focusout', () => {
                    resume_U.style.opacity = '0'
                    usernameInput.style.border = 'none'
                    arrow_U.style.display = 'none'

                    if (usernameInput.value.length > 0 && !user_Username.includes(usernameInput.value)) {
                        correct_U.style.display = 'block'
                        resume_U.style.border = '1px solid rgb(40, 200, 6)'
                        resume_U.style.color = 'rgb(40, 200, 6)'  


                        resume_U.addEventListener('mouseover', () => {
                            resume.style.border = '1px solid rgb(6, 255, 6)'
                            resume.style.color = 'rgb(6, 255, 6)'
                        })
                        resume_U.addEventListener('mouseout', () => {
                            resume.style.border = '1px solid rgb(40, 200, 6)'
                            resume.style.color = 'rgb(40, 200, 6)'
                        })


                        mistake_U.style.display = ''
                        usernameInput.addEventListener('focus', () => {
                            arrow_U.style.display = ''
                            correct_U.style.display = ''
                            arrow.style.display = 'none'
                        }) 
                        usernameInput.addEventListener('focusout', () => {
                            arrow_U.style.display = 'none'
                            correct_U.style.display = 'block'
                            arrow.style.display = 'none'
                        }) 
                        
                        
                    } else {
                        mistake_U.style.display = 'block'
                        correct_U.style.display = ''
                        usernameInput.addEventListener('focus', () => {
                            mistake_U.style.disabled = ''
                            arrow_U.style.display = 'none'
                        })
                        /* usrname focusOut !!!!!!!!!!! */
                    }
                })
            })
            
        } else {
            resume.style.border = ''
            resume.disabled = true
            resume.addEventListener('mouseover', () => {
                resume.style.border = ''
                resume.style.color = ''
            })
            resume.addEventListener('mouseout', () => {
                resume.style.border = ''
                resume.style.color = ''
            })
            resume.style.color = ''
            if (!emailPattern.test(email_input.value) && email_input.value.length > 0 || user_Email.includes(email_input.value)) {
                error_Messege.style.display = 'flex'
            } else {
                error_Messege.style.display = ''
            }
        }
    })

}, 500);



// kakimaki2552@gmail.com