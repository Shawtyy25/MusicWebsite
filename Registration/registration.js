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


function buttonOnPress(windowForm, appearingWindow, appearingWindowForm,  tickIcon, arrowIcon, crossIcon, button, correctInput, nextInputField) {
    button.addEventListener('click', () => {
        windowForm.style.marginBottom = ''
        appearingWindow.style.display = 'flex'
        tickIcon.style.display = 'block'
        arrowIcon.style.display = 'none'
        crossIcon.style.display = ''
        button.style.opacity = '0'
        button.style.visibility = 'hidden'
        correctInput.style.border = 'none'
        nextInputField.select()
        nextInputField.focus()
        appearingWindowForm.style.marginBottom = '0'
    })
    
}


function inputFocus(inputField, button, tickIcon, arrowIcon, crossIcon, previousFieldButton) {
    inputField.addEventListener('focus', () => {
        inputField.style.border = ''
        button.style.opacity = ''
        button.style.visibility = ''
        tickIcon.style.display = 'none'
        arrowIcon.style.display = 'block'
        crossIcon.style.display = 'none'
        previousFieldButton.style.opacity = '0'
        previousFieldButton.style.visibility = 'hidden'
        button.style.pointerEvents = ''
    })

}


function inputFocusOut(inputField, tickIcon, arrowIcon, crossIcon, button) {
    inputField.addEventListener('focusout', () => {
        inputField.style.border = 'none'
        tickIcon.style.display = 'block'
        arrowIcon.style.display = 'none'
        crossIcon.style.display = 'none'
        button.style.opacity = ''
        button.style.visibility = ''
        button.style.pointerEvents = ''
    })

}

function inputFocusOut_wrong(inputField, tickIcon, arrowIcon, crossIcon, button) {
    inputField.style.border = 'none'
    tickIcon.style.display = ''
    arrowIcon.style.display = 'none'
    crossIcon.style.display = 'block'
    button.style.opacity = ''
    button.style.visibility = ''
    button.style.border = ''
    button.style.color = ''
    button.style.pointerEvents = 'none'
    
    button.addEventListener('mouseover', () => {
        button.style.border = ''
        button.style.color = ''
    })
    button.addEventListener('mouseout', () => {
        button.style.border = ''
        button.style.color = ''
    })
    
}

function showPassword(eyeClosed, eyeOpened, inputField) {
    eyeClosed.addEventListener('click', () => {
        eyeClosed.style.display = 'none'
        eyeOpened.style.display = 'block'
        inputField.type = 'text'
    })
}

function hidePassword(eyeClosed, eyeOpened, inputField) {
    eyeOpened.addEventListener('click', () => {
        eyeOpened.style.display = 'none'
        eyeClosed.style.display = 'block'
        inputField.type = 'password'
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
const error_Messege_Username = document.querySelector('.errorMessegeUsername')
const usernameForm = document.querySelector('.usernameForm')
const password = document.querySelector('.password')
const passwordForm = document.querySelector('.passwordForm')
const correct_P = document.querySelector('.correct-P')
const arrow_P = document.querySelector('.arrow-P')
const mistake_P = document.querySelector('.mistake-P')
const resume_P = document.querySelector('.resume-P')
const passwordInput = document.querySelector('.password-Input')
const passwordYes = document.querySelector('.passYes')
const passwordNo = document.querySelector('.passNo')

h3.style.display = 'block'
let welcome = 'Üdvözöllek'
let test = ' a soundon!'
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let usernameValueRight = false
let usernameOpen = false
let buttonPressed = Boolean(false)
let unButtonPressed = Boolean(false)


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

                buttonOnPress(emailForm, username, usernameForm,  correct, arrow, mistake, resume, email_input, usernameInput)
                buttonPressed = Boolean(true)

                if (buttonPressed) {
                    
                    // Email-cím vizsgálata
                    inputFocus(email_input, resume, correct, arrow, mistake, resume_U)
                    inputFocusOut(email_input, correct, arrow, mistake, resume)
                    
                    email_input.addEventListener('focusout', () => {
                        if (error_Messege.style.display === 'flex' || email_input.value.length === 0) {
                            inputFocusOut_wrong(email_input, correct, arrow, mistake, resume)
                        }
                    })
                    
                    inputFocus(usernameInput, resume_U, correct_U, arrow_U, mistake_U, resume)
                    inputFocusOut(usernameInput, correct_U, arrow_U, mistake_U, resume_U)

                    // username vizsgálata
                    usernameInput.addEventListener('focusout', () => {
                        if (usernameInput.value.length > 0 && !user_Username.includes(usernameInput.value)) {
                            buttonRight(resume_U)
                            error_Messege_Username.style.display = ''
                            buttonOnPress(usernameForm, password, passwordForm, correct_U, arrow_U, mistake_U, resume_U, usernameInput, passwordInput)
                            unButtonPressed = Boolean(true)

                            // Jelszó ellenőrzése
                            if (unButtonPressed) {
                                inputFocus(passwordInput, resume_P, correct_P, arrow_P, mistake_P, resume_U)
                                inputFocusOut(passwordInput, correct_P, arrow_P, mistake_P, resume_P)

                                // JELSZÓ LÁTHATÓSÁGA
                                showPassword(passwordNo, passwordYes, passwordInput)
                                hidePassword(passwordNo, passwordYes, passwordInput)

                                passwordInput.addEventListener('focusout', () => {
                                    if (passwordInput.value.length === 0) {
                                        inputFocusOut_wrong(passwordInput, correct_P, arrow_P, mistake_P, resume_P) 
                                    }
                                    // folytatni!!!!
                                } )
                                
                            }


                        } 
                        if (usernameInput.value.length < 1 || user_Username.includes(usernameInput.value)) {
                            inputFocusOut_wrong(usernameInput, correct_U, arrow_U, mistake_U, resume_U)
                            error_Messege_Username.style.display = ''
                        } 
                        if (user_Username.includes(usernameInput.value)) {
                            error_Messege_Username.style.display = 'flex'    
                        }
                    })

                            
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
})


    

    
