// Scroll to Top Button
// Scroll-to-Top Button

// Navigation Highlighting
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});

// Function to Update Background and Content
function updateContent(backgroundImage, title, description) {
    const background = document.getElementById("background");
    const content = document.getElementById("content");

    if (background && content) {
        background.style.backgroundImage = `url('${backgroundImage}')`;
        content.innerHTML = `
            <h1>${title}</h1>
            <p>${description}</p>
            <a href="#" class="read-more">Read More →</a>
        `;
    } else {
        console.warn("Background or Content element not found.");
    }
}

// Section Functions
function showEnergy() {
    updateContent("energy.jpeg", "Energy", 
        "Our quest to make India energy-sufficient led us to become one of the largest oil & gas exploration and production players in India. Our refinery at Jamnagar is the world’s largest, integrated, single-location refining complex.");
}

function showPetrochemicals() {
    updateContent("modern-chemical-industrial-equipment-distillation-columns-tanks-heat-exchangers-pipelines-with-valves-at-an-oil-refinery-petrochemical-plant-ai-generated-free-photo.jpg", 
        "Petrochemicals", 
        "Reliance is the largest producer of petrochemicals in the country and among the top 10 in the world. Our petrochemicals business creates an extensive range of polymers, polyesters, elastomers, and advanced materials.Today, we are India’s largest retailer with an omni-channel presence that provides lasting value to Indian consumers as well as small retailers.");
}

function showRetail() {
    updateContent("lighting-design-luxury-retail-menswear-silver-dipped-bulbs-integrated-illumination-framework-hanging-rails-consultants-nulty-banner.jpg", 
        "Retail", 
        "Since its inception in 2006, Reliance Retail has revolutionized the Indian retail ecosystem by bringing the benefits of organised retail to the farthest corners of India and by including consumers as well as small merchants and producers on shared growth platforms of digitization and modernisation Today, we are India’s largest retailer with an omni-channel presence that provides lasting value to Indian consumers as well as small retailers.");
}

function showdigitalservices() {
    updateContent("digital.jpeg", "Digital Services - Jio", 
        "Reliance Retail has revolutionized the Indian retail ecosystem Today, we are India’s largest retailer with an omni-channel presence that provides lasting value to Indian consumers as well as small retailers.");
}

function shownewenergy() {
    updateContent("dfda2a5527de44dd9d89cf268b1af23f.jpeg", "New Energy", 
        "Reliance Retail has revolutionized the Indian retail ecosystem Today, we are India’s largest retailer with an omni-channel presence that provides lasting value to Indian consumers as well as small retailers.");
}

function showmediaentertainment() {
    updateContent("16-Trends-in-the-Media-and-Entertainment-Industry-to-Watch-in-2022-1920x1080-1.png", 
        "Media & Entertainment", 
        "Reliance Retail has revolutionized the Indian retail ecosystem Today, we are India’s largest retailer with an omni-channel presence that provides lasting value to Indian consumers as well as small retailers.");
}

// Slideshow Functionality
document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".slideshow");

    if (images.length > 0) {
        function changeImage() {
            images[currentImageIndex].style.opacity = 0;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.opacity = 1;
        }

        setInterval(changeImage, 3000); // Change image every 3 seconds
    } else {
        console.warn("No slideshow images found.");
    }
});

// Tab Change Function
function changeTab(tabName, imageSrc) {
    document.querySelectorAll(".box-content").forEach(content => content.classList.remove("active"));
    
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.classList.add("active");
    } else {
        console.warn(`Tab content not found: ${tabName}`);
    }

    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    
    const tabElement = document.querySelector(`[onclick="changeTab('${tabName}', '${imageSrc}')"]`);
    if (tabElement) {
        tabElement.classList.add("active");
    } else {
        console.warn(`Tab element not found for: ${tabName}`);
    }

    const tabImage = document.getElementById("tab-image");
    if (tabImage) {
        tabImage.src = imageSrc;
    } else {
        console.warn("Tab image element not found.");
    }
}
