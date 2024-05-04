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

function passwordCheckWeak(inputField, passCheckWindow, guideMessege, line1, line2, line3, guideM, resumeButton) {
    inputField.addEventListener('focusout', () => {
        if (inputField.value.length < 15 && inputField.value.toLowerCase()) {
            passCheckWindow.style.display = 'flex'
            guideMessege.innerHTML = 'A jelszó túl gyenge'
            guideMessege.style.color = 'var(--passwordWrong)'
            line1.style.backgroundColor = 'var(--passwordWrong)'
            line2.style.backgroundColor = ''
            line3.style.backgroundColor = ''
            
            guideM.style.display = ''
            resumeButton.style.opacity = ''
            resumeButton.style.visibility = ''
            resumeButton.style.border = ''
            resumeButton.style.color = ''

            resumeButton.addEventListener('mouseover', () => {
                resumeButton.style.border = ''
                resumeButton.style.color = ''
            })
            resumeButton.addEventListener('mouseout', () => {
                resumeButton.style.border = ''
                resumeButton.style.color = ''
            })
        }
    })
}

function passwordCheckMid(inputField, passCheckWindow, guideMessege, line1, line2, line3, guideM) {
    inputField.addEventListener('focusout', () => {
        if (inputField.value.length > 8) {
            passCheckWindow.style.display = 'flex'
            guideMessege.innerHTML = 'A jelszóhoz szám és kistbetű szükséges'
            guideMessege.style.color = 'var(--passwordMid)'
            line1.style.backgroundColor = 'var(--passwordMid)'
            line2.style.backgroundColor = 'var(--passwordMid)'
            line3.style.backgroundColor = ''

            guideM.style.display = ''
        }
    })
}
function passwordCheckCorrect(inputField, passCheckWindow, guideMessege, line1, line2, line3, guideM) {
    inputField.addEventListener('focusout', () => {
        if ((inputField.value.length > 15 && inputField.value.toLowerCase() && !/\d/.test(inputField.value))
        || 

        (inputField.value.length < 8 && inputField.value.length > 5 && /\d/.test(inputField.value) && /[A-Z]/.test(inputField.value)) 
        || 

        (inputField.value.length > 8 && inputField.value.length < 15 && /\d/.test(inputField.value) && inputField.value.toLowerCase())) {

            passCheckWindow.style.display = 'flex'
            guideMessege.innerHTML = 'A jelszó erős'
            guideMessege.style.color = 'var(--passwordCorrect)'
            line1.style.backgroundColor = 'var(--passwordCorrect)'
            line2.style.backgroundColor = 'var(--passwordCorrect)'
            line3.style.backgroundColor = 'var(--passwordCorrect)'
            guideM.style.display = 'none'
        }
    })
}


function passwordFocus(inputField, button, arrowIcon, previousFieldButton, crossIcon, tickIcon, otherEyeOff, otherEyeOn, currentEyeOff, currentEyeOn) {
    inputField.addEventListener('focus', () => {
        inputField.style.border = ''
        button.style.opacity = ''
        button.style.visibility = ''
        arrowIcon.style.display = ''
        previousFieldButton.style.opacity = '0'
        previousFieldButton.style.visibility = 'hidden'
        button.style.pointerEvents = ''
        crossIcon.style.display = ''
        tickIcon.style.display = ''
        otherEyeOff.style.display = 'none'
        otherEyeOn.style.display = 'none'
        currentEyeOff.style.display = ''
        currentEyeOn.style.display = ''
    })

}
function passwordFocusOut(inputField, button, arrowIcon, tickIcon, crossIcon) {
    inputField.addEventListener('focusout', () => {
        inputField.style.border = 'none'
        button.style.opacity = ''
        button.style.visibility = ''
        button.style.pointerEvents = ''
        arrowIcon.style.display = 'none'

        if (inputField.value.length >= 8) {
            tickIcon.style.display = 'block'
            crossIcon.style.display = ''

        } else {
            crossIcon.style.display = 'block'
            tickIcon.style.display = ''

        }
    })

}



function passwordConfirmation(inputField, button, prevButton,arrow, tick, cross) {
    inputField.style.display = 'flex'
    button.style.display = 'flex'
    prevButton.style.display = ''
    arrow.style.display = 'flex'
    tick.style.display = ''
    cross.style.display = ''


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
const passwordChecker = document.querySelector('.passwordChecker')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const passwordMiniGuide = document.querySelector('.passwordMiniGuide')
const passwordConf = document.querySelector('.passwordConf')
const passordConfForm = document.querySelector('.passwordConfForm')
const correct_Pconf = document.querySelector('.correct-PC')
const arrow_Pconf = document.querySelector('.arrow-PC')
const mistake_Pconf = document.querySelector('.mistake-PC')
const resume_Pconf = document.querySelector('.resume-PC')
const passwordConfInput = document.querySelector('.passwordConf-Input')
const passwordConfYes = document.querySelector('.passYesConf')
const passwordConfNo = document.querySelector('.passNoConf')
const passwordGuide = document.querySelector('.passwordGuide')

h3.style.display = 'block'
let welcome = 'Üdvözöllek'
let test = ' a soundon!'
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let usernameValueRight = false
let usernameOpen = false
let buttonPressed = Boolean(false)
let unButtonPressed = Boolean(false)
let pwButtonPressed = Boolean(false)
let isPassRight = false


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
                                passwordFocus(passwordInput, resume_P, arrow_P, resume_U, mistake_P, correct_P, passwordConfNo, passwordConfYes, passwordNo, passwordYes)
                                passwordFocusOut(passwordInput, resume_P, arrow_P, correct_P, mistake_P)

                                // JELSZÓ LÁTHATÓSÁGA
                                showPassword(passwordNo, passwordYes, passwordInput)
                                hidePassword(passwordNo, passwordYes, passwordInput)

                                passwordCheckWeak(passwordInput, passwordChecker, passwordMiniGuide, line1, line2, line3, passwordGuide, resume_P);
                                passwordCheckMid(passwordInput, passwordChecker, passwordMiniGuide, line1, line2, line3, passwordGuide);
                                passwordCheckCorrect(passwordInput, passwordChecker, passwordMiniGuide, line1, line2, line3, passwordGuide)

                                
                                // Jelszó ellenőrző folytatása!!! -->>  

                                resume_P.addEventListener('click', () => {
                                    passwordConfirmation(passwordConf, resume_Pconf, resume_P, arrow_Pconf, correct_Pconf, mistake_Pconf)
                                })
                            }

                            passwordInput.addEventListener('focusout', () => {
                                if (passwordInput.value.length === 0) {
                                    inputFocusOut_wrong(passwordInput, correct_P, arrow_P, mistake_P, resume_P) 
                                    passwordChecker.style.display = 'none'

                                }
                                if (passwordInput.value.length > 8) {
                                    buttonRight(resume_P);
                                }
                            } )


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


    

    
