// Validate Registration Form
function validateRegistration() {
    // Clear previous errors
    clearErrors();

    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;

    // Name validation
    if (name.trim() === '') {
        displayError('nameError', 'Name is required');
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        displayError('emailError', 'Invalid email address');
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        displayError('passwordError', 'Password must be at least 8 characters long');
        isValid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    // Age validation
    if (isNaN(age) || age < 18 || age > 100) {
        displayError('ageError', 'Age must be between 18 and 100');
        isValid = false;
    }

    // Gender validation
    if (!gender) {
        displayError('genderError', 'Gender is required');
        isValid = false;
    }

    // Country validation
    if (country === '') {
        displayError('countryError', 'Please select your country');
        isValid = false;
    }

    // Terms and Conditions validation
    if (!terms) {
        displayError('termsError', 'You must agree to the Terms and Conditions');
        isValid = false;
    }

    return isValid;
}

// Validate Login Form
function validateLogin() {
    clearErrors();

    let isValid = true;
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        displayError('loginEmailError', 'Invalid email address');
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        displayError('loginPasswordError', 'Password must be at least 8 characters long');
        isValid = false;
    }

    return isValid;
}

// Utility functions to display and clear error messages
function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.innerText = '';
        error.style.display = 'none';
    });
}
