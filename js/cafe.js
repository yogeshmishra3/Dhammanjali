let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
        
    function showSlide(index) {
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;
            
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
    function nextSlide() {
        showSlide(currentIndex + 1);
    }
    function prevSlide() {
        showSlide(currentIndex - 1);
    }
        setInterval(nextSlide, 3000);
    // testimonal

    document.addEventListener("DOMContentLoaded", function () {
        let currentIndex = 0;
        const testimonials = document.querySelectorAll(".testimonial");
        const totalTestimonials = testimonials.length;
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle("active", i === index);
            });
        }
        
        window.nextSlide = function () {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            showTestimonial(currentIndex);
        };
        
        window.prevSlide = function () {
            currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
            showTestimonial(currentIndex);
        };
        
        showTestimonial(currentIndex);
        });

