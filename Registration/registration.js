// függvények
function buttonRight(button) {
    button.style.border = '1px solid var(--buttonRight)'
    button.style.color = 'var(--buttonRight)'
    button.addEventListener('mouseover', () => {
        button.style.border = '1px solid rgb(6, 255, 6)'
        button.style.color = 'rgb(6, 255, 6)'
    })
    button.addEventListener('mouseout', () => {
        button.style.border = '1px solid rgb(40, 200, 6)'
        button.style.color = 'rgb(40, 200, 6)'
    })
}

function buttonOnPress(window, appearingWindow, tickIcon, arrowIcon, crossIcon, button, correctInput, nextInputField) {
    button.addEventListener('click', () => {
        window.style.marginBottom = ''
        appearingWindow.style.display = 'flex'
        tickIcon.style.display = 'block'
        arrowIcon.style.display = 'none'
        crossIcon.style.display = ''
        button.style.opacity = '0'
        button.style.visibility = 'hidden'
        correctInput.style.border = 'none'
        nextInputField.select()
        nextInputField.focus()
    })
    
}


function inputFocus(inputField, button, tickIcon, arrowIcon, crossIcon, nextFieldButton) {
    inputField.addEventListener('focus', () => {
        inputField.style.border = ''
        button.style.opacity = ''
        button.style.visibility = ''
        tickIcon.style.display = 'none'
        arrowIcon.style.display = 'block'
        crossIcon.style.display = 'none'
        nextFieldButton.style.opacity = '0'
        nextFieldButton.style.visibility = 'hidden'

    })

}


function inputFocusOut(inputField, tickIcon, arrowIcon, crossIcon, button) {
    inputField.addEventListener('focusout', () => {
        inputField.style.border = 'none'
        tickIcon.style.display = 'block'
        arrowIcon.style.display = 'none'
        crossIcon.style.display = 'none'
        button.style.opacity = ''

    })

}

// Függvények vége------------> 

const h3 = document.querySelector('.rHeader h3');
const rHeader = document.querySelector('.rHeader')
const email = document.querySelector('.email')
const emailForm = document.querySelector('.emailForm')
const registrationWindow = document.querySelector('.registration-window')
const email_input = document.querySelector('.email-Input')
const resume = document.querySelector('.resume')
const error_Messege = document.querySelector('.errorMessege')
const username = document.querySelector('.username')
const correct = document.querySelector('.correct')
const correct_U = document.querySelector('.correct-U')
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
let usernameValueRight = false
let usernameOpen = false
let buttonPressed = Boolean(false)


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
    setTimeout(() => {
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
}, 500);

// Email mező vizsgálata

email_input.addEventListener('focusout', () => {
    if (email_input.value.length === 0) {
        error_Messege.style.display = ''
        resume.style.color = ''
        resume.style.border = ''
        resume.addEventListener('mouseover', () => {
            resume.style.border = ''
            resume.style.color = ''
        })
        resume.addEventListener('mouseout', () => {
            resume.style.border = ''
            resume.style.color = ''
        })
    } else {
        if (emailPattern.test(email_input.value) && !user_Email.includes(email_input.value)) {
            error_Messege.style.display = ''

            buttonRight(resume);
                buttonOnPress(emailForm, username, correct, arrow, mistake, resume, email_input, usernameInput)
                buttonPressed = Boolean(true)

                if (buttonPressed) {
                    inputFocus(email_input, resume, correct, arrow, mistake, resume_U)
                    inputFocusOut(email_input, correct, arrow, mistake, resume)

                }



            // TÉRJ VISSZA!!!!




        } else if (!emailPattern.test(email_input.value) || user_Email.includes(email_input.value)) {
            error_Messege.style.display = 'flex'
            resume.style.border = ''
            resume.style.color = ''

            resume.addEventListener('mouseover', () => {
                resume.style.border = ''
                resume.style.color = ''

            })
            resume.addEventListener('mouseout', () => {
                resume.style.border = ''
                resume.style.color = ''

            })
        }
    }
});


// ROSSZ!!!!!!!! csak példának van
/* email_input.addEventListener('focusout', () => {
    

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

                if (email_input.value.length > 0 && emailPattern.test(email_input.value) && !user_Email.includes(email_input.value)) {
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
        })

    } else {
        resume.style.border = ''
        emailValueRight = false
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

    // username Beállításai --------------------


    // Jelszó beállítása ------------

})*/

