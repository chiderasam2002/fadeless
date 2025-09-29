
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            alert(product + ' added to cart!');
            
        });
    });
});
