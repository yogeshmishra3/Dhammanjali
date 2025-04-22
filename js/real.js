document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function movePrev() {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSliderPosition();
    }

    function moveNext() {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSliderPosition();
    }

    prevButton.addEventListener("click", movePrev);
    nextButton.addEventListener("click", moveNext);

    // Auto-slide every 5 seconds (optional)
    setInterval(moveNext, 5000);
});

    // slider
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true, // ✅ Enables infinite looping
        centeredSlides: true, // ✅ Centers the slides
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1200: { slidesPerView: 4, centeredSlides: true },
            992: { slidesPerView: 3, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: true },
            576: { slidesPerView: 1, centeredSlides: true }
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const carousel = document.querySelector(".carousel");
        const prevButton = document.querySelector(".prev");
        const nextButton = document.querySelector(".next");
    
        function getScrollAmount() {
            return window.innerWidth > 768 ? 300 : 200; // Adjust scroll distance based on screen size
        }
    
        function scrollLeft() {
            carousel.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
        }
    
        function scrollRight() {
            carousel.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
        }
    
        prevButton.addEventListener("click", scrollLeft);
        nextButton.addEventListener("click", scrollRight);
    });
    
    
