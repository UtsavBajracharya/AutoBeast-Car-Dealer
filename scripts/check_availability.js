// check Availability js
function validateForm() {
    const form = document.getElementById('check_availability_form');

    // Validate first name
    const firstNameInput = document.getElementById('firstName');
    let firstNameValue = firstNameInput.value.trim();

    // Check if firstNameValue contains non-alphabetic characters
    if (!/^[A-Za-z]+$/.test(firstNameValue)) {
        alert('Please enter a valid first name containing only alphabetic characters');
        return false; // Prevent form submission
    }

    if (firstNameValue === '') {
        alert('Empty box! Please enter your first name');
        return false; // Prevent form submission
    }


    // Validate last name
    const lastNameInput = document.getElementById('lastName');
    let lastNameValue = lastNameInput.value.trim();

    // Check if firstNameValue contains non-alphabetic characters
    if (!/^[A-Za-z]+$/.test(lastNameValue)) {
        alert('Please enter a valid last name containing only alphabetic characters');
        return false; // Prevent form submission
    }

    if (lastNameValue === '') {
        alert('Empty box! Please enter your last name');
        return false; // Prevent form submission
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address eg. car.model@gmail.com');
        return false;
    }

    // Validate phone number
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid phone number (10 digits)');
        return false;
    }

    //Contact-preference validation
    const radioButtons = document.querySelectorAll('input[name="preference"]');
    let selectedPreference = false;

    radioButtons.forEach(function(radioButton) {
        if (radioButton.checked) {
            selectedPreference = true;
        }
    });

    if (!selectedPreference) {
        alert('Please select a contact preference');
        return false; // Prevent form submission
    }

    // If all fields are valid, you can submit the form
    alert('Form submitted successfully!');
    form.reset(); // Reset the form
    return false; // Prevent form submission
}