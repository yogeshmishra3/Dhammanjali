var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,   // 3 images visible at a time
    spaceBetween: 20,   // Space between images
    loop: true,         // Infinite loop
    autoplay: {
        delay: 2500,    // Auto-slide every 2.5 seconds
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    
    const cartBtn = document.getElementById("cart-btn");
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const cartDiv = document.getElementById("cart");
    const checkoutBtn = document.getElementById("checkout");

    // ✅ Check if cartBtn exists before adding event listener
    if (cartBtn && cartDiv) {
        cartBtn.addEventListener("click", () => {
            cartDiv.style.display = cartDiv.style.display === "none" ? "block" : "none";
        });
    }

    // ✅ Ensure elements exist before adding event listeners
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const name = event.target.getAttribute("data-name");
                const price = parseFloat(event.target.getAttribute("data-price"));

                // Check if item is already in cart
                let existingItem = cart.find(item => item.name === name);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ name, price, quantity: 1 });
                }

                updateCart();
            });
        });
    }

    // ✅ Ensure updateCart runs only if necessary elements exist
    function updateCart() {
        if (!cartItems || !totalPrice || !cartCount) return;

        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPrice.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
    }

    // ✅ Ensure checkout button exists before adding event listener
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            alert("Thank you for your purchase!");
            cart = [];
            updateCart();
        });
    }
});
