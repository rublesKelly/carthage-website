// SELECT ELEMENTS for cart
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
//Select elements for HTML template 
const navbarEl = document.querySelector(".navBar");
const footerEl = document.querySelector(".footer");


//Render HTML template
function renderHTMLtemplate(){
    navbarEl.innerHTML += `
        <img src="src/resources/eca29303f01b1b3ddf57bfdc09253ea6.png" alt="">
        <a href="index.html">Home</a>
        <a href="cityHistoryGallery.html">Gallery</a>
        <a href="events.html">Events</a>
        <a href="localAttractionsVenueGuide.html">Attractions</a>
        <a href="contacts.html">Contact Us</a>`
    footerEl.innerHTML += `
        <div id="footerNav">
            <a href="">Mobile app</a>
            <a href="">Community</a>
            <a href="">Company</a>
            <img src="src/resources/eca29303f01b1b3ddf57bfdc09253ea6.png" alt="">
            <a href="">About Us</a>
            <a href="">Blog</a>
            <a href="">Resources</a>
        </div>
        <div class="horizontalRule"></div>
        <div class="socialIcons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>`
}
renderHTMLtemplate();

//Cart should be put in a seperate file and link tagged to events page
let cart = JSON.parse(localStorage.getItem("CART")) || [];  //Declare state
updateCart(); 

// update cart run often to keep cart up to date
function updateCart() {
    
    renderSubtotal();
    
    
    localStorage.setItem("CART", JSON.stringify(cart));   // save cart to local storage
}

//Add to cart
function addToCart(id) {
    // check if event already exist in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = events.find((event) => event.id === id);
        
        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }
    
    updateCart();
} 

//Remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    
    updateCart();
}

// calculate and render subtotal
function renderSubtotal() {
    let totalPrice = 0,
    totalItems = 0;
    
    cart.forEach((item) => {
        totalPrice += item.EurPrice * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
}


//Helper/tester functions
console.log(event.title);