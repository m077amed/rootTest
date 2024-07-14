document.querySelector('.contactLink').addEventListener('click', function() {
    let content = document.querySelector('#content');
    content.innerHTML = `
        <div class="form-container d-flex flex-wrap my-5 py-5 w-75 mx-auto">
            <div class="mb-3 w-50 my-2">
                <input type="text" class="form-control" id="UserName" name="UserName" placeholder="Please Enter Your Name">
                <div class="alert alert-danger mt-3 pb-0 mb-0 nameAlert">
                    <ul>
                        <li class="special">No special characters are allowed</li>
                        <li class="special">No numbers are allowed</li>
                    </ul>
                </div>
            </div>
            <div class="mb-3 w-50 ps-3 my-2">
                <input type="email" class="form-control" id="UserEmail" name="UserEmail" aria-describedby="emailHelp" placeholder="Please Enter Your Email">
                <div class="alert alert-danger mt-3 pb-0 mb-0 emailAlert">
                    <ul>
                        <li class="special">Valid email format like example@yyy.zzz</li>
                    </ul>
                </div>
            </div>
            <div class="mb-3 w-50 my-2">
                <input type="text" class="form-control" id="UserPhone" name="UserPhone" placeholder="Please Enter Your Phone">
                <div class="alert alert-danger mt-3 pb-0 mb-0 phoneAlert">
                    <ul>
                        <li class="special">Enter only a valid phone number</li>
                    </ul>
                </div>
            </div>
            <div class="mb-3 w-50 ps-3 my-2">
                <input type="number" class="form-control" id="UserAge" name="UserAge" placeholder="Please Enter Your Age">
                <div class="alert alert-danger mt-3 pb-0 mb-0 ageAlert">
                    <ul>
                        <li class="special">Enter only a valid age</li>
                    </ul>
                </div>
            </div>
            <div class="mb-3 w-50 my-2">
                <input type="password" class="form-control" id="UserPassword" name="UserPassword" placeholder="Please Enter Your Password">
                <div class="alert alert-danger mt-3 pb-0 mb-0 passwordAlert">
                    <ul>
                        <li class="special">Minimum eight characters</li>
                        <li class="special">At least one letter and one number</li>
                    </ul>
                </div>
            </div>
            <div class="mb-3 w-50 ps-3 my-2">
                <input type="password" class="form-control" id="UserConfirmPassword" name="UserConfirmPassword" placeholder="Please Re-Enter Your Password">
                <div class="alert alert-danger mt-3 pb-0 mb-0 confirmPasswordAlert">
                    <ul>
                        <li class="special">Passwords do not match</li>
                    </ul>
                </div>
            </div>
            <button type="submit" class="btn btn-primary my-3 submitButton">Submit</button>
        </div>
    `;

    // Reattach event listeners after content update
    attachValidationListeners();
});

// Function to attach validation listeners
function attachValidationListeners() {
    let nameInput = document.getElementById('UserName');
    let namePattern = /^[a-zA-z]{2,}$/;
    let nameAlert = document.querySelector('.nameAlert');

    nameInput.addEventListener('keyup', checkNameValidation);

    let emailInput = document.getElementById('UserEmail');
    let emailPattern = /^\w*@[a-zA-z0-9]+\.[a-zA-z]{2,}$/;
    let emailAlert = document.querySelector('.emailAlert');

    emailInput.addEventListener('keyup', checkEmailValidation);

    let phoneInput = document.getElementById('UserPhone');
    let phonePattern = /^01[0125]\d{8}$/;
    let phoneAlert = document.querySelector('.phoneAlert');

    phoneInput.addEventListener('keyup', checkPhoneValidation);

    let ageInput = document.getElementById('UserAge');
    let agePattern = /^[1-9][0-9]?$/;
    let ageAlert = document.querySelector('.ageAlert');

    ageInput.addEventListener('keyup', checkAgeValidation);

    let passwordInput = document.getElementById('UserPassword');
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let passwordAlert = document.querySelector('.passwordAlert');

    passwordInput.addEventListener('keyup', checkPasswordValidation);

    let confirmPasswordInput = document.getElementById('UserConfirmPassword');
    let confirmPasswordAlert = document.querySelector('.confirmPasswordAlert');

    confirmPasswordInput.addEventListener('keyup', confirmPassword);
}

// Validation functions
function checkNameValidation() {
    let nameInput = document.getElementById('UserName');
    let nameAlert = document.querySelector('.nameAlert');

    if (/^[a-zA-z]{2,}$/.test(nameInput.value)) {
        nameAlert.style.display = "none";
    } else {
        nameAlert.style.display = "block";
    }
}

function checkEmailValidation() {
    let emailInput = document.getElementById('UserEmail');
    let emailAlert = document.querySelector('.emailAlert');

    if (/^\w{2,}@[a-zA-z0-9]+\.[a-zA-z]{2,}$/.test(emailInput.value)) {
        emailAlert.style.display = "none";
    } else {
        emailAlert.style.display = "block";
    }
}

function checkPhoneValidation() {
    let phoneInput = document.getElementById('UserPhone');
    let phoneAlert = document.querySelector('.phoneAlert');

    if (/^01[0125]\d{8}$/.test(phoneInput.value)) {
        phoneAlert.style.display = "none";
    } else {
        phoneAlert.style.display = "block";
    }
}

function checkAgeValidation() {
    let ageInput = document.getElementById('UserAge');
    let ageAlert = document.querySelector('.ageAlert');

    if (/^[1-9][0-9]?$/.test(ageInput.value)) {
        ageAlert.style.display = "none";
    } else {
        ageAlert.style.display = "block";
    }
}

function checkPasswordValidation() {
    let passwordInput = document.getElementById('UserPassword');
    let passwordAlert = document.querySelector('.passwordAlert');

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value)) {
        passwordAlert.style.display = "none";
    } else {
        passwordAlert.style.display = "block";
    }
}

function confirmPassword() {
    let confirmPasswordInput = document.getElementById('UserConfirmPassword');
    let passwordInput = document.getElementById('UserPassword');
    let confirmPasswordAlert = document.querySelector('.confirmPasswordAlert');

    if (confirmPasswordInput.value === passwordInput.value) {
        confirmPasswordAlert.style.display = 'none';
    } else {
        confirmPasswordAlert.style.display = 'block';
    }
}
attachValidationListeners();
