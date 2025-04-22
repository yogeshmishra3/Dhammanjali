// Testimonials Data
const testimonials = [
    {
        name: "Sarah Johnson",
        quote: "Hope for All changed my life. Their education program helped me pursue my dreams.",
        image: "/assets/man1.jpeg"
    },
    {
        name: "Michael Chen",
        quote: "The healthcare support I received was incredible. They truly care about people.",
        image: "/assets/man2.png"
    },
    {
        name: "Elena Rodriguez",
        quote: "Community development programs have transformed our entire village.",
        image: "/assets/man4.jpg"
    }
];

// Function to render testimonials dynamically
function renderTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    
    if (!testimonialsContainer) {
        console.error("Error: '.testimonials-container' not found in the DOM.");
        return;
    }

    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.classList.add('testimonial-card');
        card.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <p class="quote">"${testimonial.quote}"</p>
            <h5 class="name">${testimonial.name}</h5>
        `;
        testimonialsContainer.appendChild(card);
    });
}

// Donation Form Submission Handler
function handleDonationForm() {
    const donationForm = document.querySelector('.donate-form');  // Corrected to match HTML
    
    if (!donationForm) {
        console.error("Error: '.donate-form' not found in the DOM.");
        return;
    }

    donationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const donationAmount = this.querySelector('input[type="number"]').value;
        
        if (donationAmount && donationAmount > 0) {
            alert(`Thank you for your donation of $${donationAmount}! Your support makes a difference.`);
            this.reset();
        } else {
            alert('Please enter a valid donation amount.');
        }
    });
}

// Initialize functions when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderTestimonials();
    handleDonationForm();
});