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

//GeoLocation 
const el = document.getElementById("demo");

//This function has four atgs the latitude and longitude of two locations and returns the distance between them in km
function calcDist(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

function getLocation() {
  if (navigator.geolocation) {
	  //getCurPos() calls showPosition and inputs a location object in the args
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    el.innerHTML = "Geolocation is not supported by this browser.";
  }
}
//For now outputs coordinates to element 
function showPosition(position) {
   latCurrent = position.coords.latitude
   longCurrent = position.coords.longitude
   latTunis = 36.806389 
   longTunis = 10.181667

    distTunis = calcDist(latTunis, longTunis, latCurrent, longCurrent)
    el.innerHTML = `You are ${distTunis} from Tunis`
}

    

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