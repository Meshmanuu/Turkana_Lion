
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        let isValid = true;

        // Clear previous error messages
        clearErrorMessages();

        // Validate name
        if (nameInput.value.trim() === '') {
            isValid = false;
            showError(nameInput, 'Name is required.');
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            isValid = false;
            showError(emailInput, 'Email is required.');
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            isValid = false;
            showError(emailInput, 'Email is invalid.');
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            isValid = false;
            showError(messageInput, 'Message is required.');
        }

        // Show success alert if form is valid
        if (isValid) {
            alert('Form has been submitted successfully!');
            form.reset();
        }
    });

    // Function to show error message
    const showError = (input, message) => {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    };

    // Function to clear error messages
    const clearErrorMessages = () => {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((message) => message.remove());
    };
});
