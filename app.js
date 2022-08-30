
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
        <a href="contacts.html">Contact Us</a>
        `
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
        </div>
        <canvas id="sun" class="sun" style="margin: 0 auto;"></canvas>  `
}
renderHTMLtemplate();

//Canvas scripting setup
const canvasEl = document.getElementById("sun");
const sun = canvasEl.getContext("2d");
//Draw sun
sun.beginPath();
sun.arc(95, 50, 40, 0, 2 * Math.PI);


// Create gradient
const grd = sun.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "yellow");
grd.addColorStop(1, "white");

// Fill with gradient
sun.fillStyle = grd;
sun.fillRect(10, 10, 150, 80);
 




//GeoLocation
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
    d = Math.round(d)
    return d;
}

    //Helper function for calcDist that converts numeric degrees to radians
        function toRad(Value) 
        {
            return Value * Math.PI / 180;
        }

//Grab element to be used to display results
const el = document.getElementById("GEO");
// console.log(el)

function getLocation() {
  if (navigator.geolocation) {
	  //getCurPos() calls showPosition and inputs a location object in the args
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    el.innerHTML = "Geolocation is not supported by this browser.";
  }
}
 
function showPosition(position) {
    latCurrent = position.coords.latitude
    longCurrent = position.coords.longitude
    latTunis = 36.806389 
    longTunis = 10.181667

    distTunis = calcDist(latTunis, longTunis, latCurrent, longCurrent)
    el.innerHTML = `You are ${distTunis}km away from Tunis`
}

    

