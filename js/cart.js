// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = 0;

// Update cart count in the UI
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Add item to cart
function addToCart(name, price, image, carModel) {
    cart.push({ name, price, image, carModel });
    cartCount = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Proizvod dodan u korpu!');
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    cartCount = cart.length;
    updateCartCount();

    // Add click handlers to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const name = card.querySelector('h3').textContent;
            const price = parseFloat(card.querySelector('.price').textContent);
            const image = card.querySelector('img').src;
            const carModel = document.querySelector('.products-header h1').textContent.split('-')[0].trim();
            addToCart(name, price, image, carModel);
        });
    });
});