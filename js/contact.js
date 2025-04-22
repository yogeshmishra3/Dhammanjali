document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const captchaImage = document.getElementById('captcha-image');

    // Captcha Refresh Function
    window.refreshCaptcha = function() {
        // Add timestamp to prevent caching
        captchaImage.src = "captcha.jpg?" + new Date().getTime();
    };

    // Form Validation
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Basic form validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        // Email validation
        const emailField = contactForm.querySelector('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField && !emailRegex.test(emailField.value)) {
            emailField.classList.add('error');
            isValid = false;
        }

        // Phone number validation
        const phoneField = contactForm.querySelector('input[type="tel"]');
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (phoneField && !phoneRegex.test(phoneField.value)) {
            phoneField.classList.add('error');
            isValid = false;
        }

        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Form submitted successfully!');
            contactForm.reset();
            refreshCaptcha();
        }
    });
});