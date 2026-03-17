// validation.js

/**
 * Validation module for various form fields
 */

// Function to validate name (letters only)
function validateName(name) {
    const regex = /^[A-Za-z ]+$/;
    return regex.test(name);
}

// Function to validate age (between 1 to 120)
function validateAge(age) {
    return age >= 1 && age <= 120;
}

// Function to validate phone (10 digits)
function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

// Function to validate city (letters and spaces only)
function validateCity(city) {
    const regex = /^[A-Za-z ]+$/;
    return regex.test(city);
}

// Function to validate gender (must be Male, Female, or Other)
function validateGender(gender) {
    const validGenders = ['Male', 'Female', 'Other'];
    return validGenders.includes(gender);
}

// Function to sanitize input to prevent XSS attacks
function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input; // use innerText instead of innerHTML
    return element.innerHTML;
}

/**
 * Validate Page 1 of the form
 */
function validatePage1(form) {
    const name = sanitizeInput(form.name.value);
    const age = form.age.value;
    const phone = form.phone.value;
    const city = sanitizeInput(form.city.value);
    const gender = form.gender.value;

    if (!validateName(name)) {
        alert('Invalid name.');
        return false;
    }
    if (!validateAge(age)) {
        alert('Invalid age.');
        return false;
    }
    if (!validatePhone(phone)) {
        alert('Invalid phone.');
        return false;
    }
    if (!validateCity(city)) {
        alert('Invalid city.');
        return false;
    }
    if (!validateGender(gender)) {
        alert('Invalid gender.');
        return false;
    }
    return true;
}

/**
 * Validate Page 2 of the form
 */
function validatePage2(form) {
    // Implement validation logic for page 2 of the form
    // This is a placeholder for actual validation logic.
    return true;
}

module.exports = { validateName, validateAge, validatePhone, validateCity, validateGender, sanitizeInput, validatePage1, validatePage2 };