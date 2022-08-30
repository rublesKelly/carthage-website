const events = [
    {
        id: 0,
        EurPrice: 15,
        title: "Sicca Jazz : El Kef Hails the Jazz Music",
        date: "Tuesday, March 19, 2019 to Saturday, March 23, 2019",
        description: "Music has always helped people bond beyond any kind of boundaries. It has the magical ability to ignite the human spirit and unite folks from different backgrounds regardless of their cultural differences. Under the prevailing spirit of love and unity, El Kef, located in the north west of Tunisia, is hosting, from March 19th to 23rd the 5th edition of Sicca Jazz, an international music festival that has recently become one of the most popular events among Jazz and world music lovers        The festivities will take place in the land of Venus to commemorate her legacy, as the embodiment of love. Indeed, the experience will be heartwarming for those who seek enticement and infatuation.",
        imgSrc: "src/resources/Events/42274508_2197028083898000_8454620706741682176_n.jpg",
        numberOfUnits: 1
    },

    {
        id: 1,
        EurPrice: 25,
        title: "Damso Concert",
        date: "Saturday, March 2, 2019",
        description: "Over the last decades, Tunisia has gained a solid reputation in hosting phenomenal events and outstanding festivals. Creative souls from all over the world travel to Tunisia to celebrate art and share memorable experiences. <br> Once again, Tunisia is welcoming one of the finest artists to perform in El Menzah Sports Palace. This star is no other than Damso, the famous Belgian Congolese rapper that has quickly become a hip-hop icon in the digital age. His latest album \"Lithopedion\" broke all records with more than 61 million downloads in just one week. Thanks to his remarkable presence, great flow and passionate lyrics, this young talented artist is now coveted by the biggest festivals on the planet. Damso will be coming to Tunisia after a ''Sold-Out'' European tour. <br> The long-awaited concert will take place on Saturday 2 March 2019, the Tunisian rapper A.L.A will be opening the evening to the greatest delight of his fans.",
        imgSrc: "src/resources/Events/damso.png",
        numberOfUnits: 1
    },

    {
        id: 2,
        EurPrice: 20,
        title: "The International Sahara Festival",
        date: "Tuesday, Dec 20, 2018 to Saturday, Dec 23, 2018",
        description: "The 51st edition of The International Sahara Festival in Douz will welcome you for a unique experience from December 20th to December 23rd in the heart of the Sahara in southern Tunisia. The festival celebrates the rich history of the berbere culture and the Mrazig tribe that prospered in the Tunisian Sahara for decades, enlightening the region with their art, music and timeless traditions. Travel to a magic scenery through palm trees and historical villages in Douz, where the festival takes place. Different activities are planned to take you on a memorable adventure to discover the local traditions. From a traditional wedding ceremony to music shows and horse races.",
        imgSrc: "src/resources/Events/affiche_festival_douz_2018.jpeg",
        numberOfUnits: 1
    },

    {
        id: 3,
        EurPrice: 10,
        title: "International Festival Of Dromedary Races",
        date: "Tuesday, March 19, 2019 to Saturday, March 23, 2019",
        description: "In the era of new technology, old habits are struggling to retain the interest of the public. While this is true for most traditions, some seem to be too precious in the eyes. of many of our fellow countrymen. \n Dromedary racing is one of these timeless traditions that new generations seek to preserve in Djerid, Kebeli. You won't fall under the charm of the moment until you attend the International Festival of Dromedary Races. For two days, 1st and 2nd of December 2018, this unique event will be taking place in Douz, the beating heart of the Tunisian Sahara. It's a great source of entertainment for the local community apart from its cultural and economic aims such as promoting sports tourism and encouraging investment.",
        imgSrc: "src/resources/Events/horses.png",
        numberOfUnits: 1
    }
]

//Render events
const eventsEl = document.querySelector(".events");


function renderEvents() {
    events.forEach((event) => {
      eventsEl.innerHTML += `
      <div class="eventCard">
            <h3>${event.title}</h3>
            <h6><strong>Date:</strong>${event.date}</h6>
            
                <p>${event.description}</p>
                <img src="${event.imgSrc}" alt="">
            
            <button class="add-to-cart" onclick="addToCart(${event.id})">Book Now</button>
        </div>`;
    });
}
renderEvents();

//Lazy Loader with XML 
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            moreEvents = JSON.parse(xhttp.responseText)
            // moreEvents = xhttp.responseText
            console.log(moreEvents) 
            console.log(events);
            renderMoreEvents()     
        }
    };
    xhttp.open("GET", "ExtraEvents.js", true);
    xhttp.send();
  }

//Render more events
const moreEventsEl = document.querySelector(".moreEvents");


function renderMoreEvents() {
    moreEvents.forEach((event) => {
      eventsEl.innerHTML = `
      <div class="eventCard">
            <h3>${event.title}</h3>
            <h6><strong>Date:</strong>${event.date}</h6>
            
                <p>${event.description}</p>
                <img src="${event.imgSrc}" alt="">
            
            <button class="add-to-cart" onclick="addToCart(${event.id})">Book Now</button>
        </div>`;
    });
}



