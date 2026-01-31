// Contact Form Script - Validation and submission

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('formMessage');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate email format
function isValidEmail(email) {
    return emailRegex.test(email);
}

// Clear error messages
function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    formMessage.textContent = '';
    formMessage.className = '';
}

// Validate form
function validateForm() {
    clearErrors();
    let isValid = true;

    // Validate name
    if (!nameInput.value.trim()) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Validate email
    if (!emailInput.value.trim()) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate message
    if (!messageInput.value.trim()) {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    return isValid;
}

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Show success message
            formMessage.textContent = '✓ Message sent successfully! Thank you for reaching out.';
            formMessage.className = 'success';

            // Reset form
            contactForm.reset();

            // Clear success message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = '';
            }, 5000);
        }
    });

    // Real-time validation
    nameInput.addEventListener('blur', () => {
        if (!nameInput.value.trim()) {
            document.getElementById('nameError').textContent = 'Name is required';
        } else {
            document.getElementById('nameError').textContent = '';
        }
    });

    emailInput.addEventListener('blur', () => {
        if (!emailInput.value.trim()) {
            document.getElementById('emailError').textContent = 'Email is required';
        } else if (!isValidEmail(emailInput.value.trim())) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
        } else {
            document.getElementById('emailError').textContent = '';
        }
    });

    messageInput.addEventListener('blur', () => {
        if (!messageInput.value.trim()) {
            document.getElementById('messageError').textContent = 'Message is required';
        } else {
            document.getElementById('messageError').textContent = '';
        }
    });
}
