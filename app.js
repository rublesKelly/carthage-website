// SELECT ELEMENTS
const eventsEl = document.querySelector(".events");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

//Render events
function renderevents() {
    events.forEach((event) => {
      eventsEl.innerHTML += `
      <div class="eventCard">
            <h3>${event.title}</h3>
            <h6><strong>Date:</strong>${event.date}</h6>
            <p>${event.description}</p>
            <img src="${event.imgSrc}" alt="">
            <button class="add-to-cart" onclick="(addToCart(${event.id})">Book Now</button>
        </div>`;
    });
}
renderevents();

console.log(event.title);

//Cart
    let cart = JSON.parse(localStorage.getItem("CART")) || [];  //Declare state
    updateCart(); 

    // update cart run often to keep cart up to date
    function updateCart() {
        renderCartItems();
        renderSubtotal();
    
    
        localStorage.setItem("CART", JSON.stringify(cart));   // save cart to local storage
    }

    //Add to cart
    function addToCart(id) {
        // check if product already exist in cart
        if (cart.some((item) => item.id === id)) {
          changeNumberOfUnits("plus", id);
        } else {
          const item = products.find((product) => product.id === id);
      
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
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
        });
    
        subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
        totalItemsInCartEl.innerHTML = totalItems;
    }