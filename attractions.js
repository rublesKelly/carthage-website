const attractions = [
    {
        id: 0,
        name: "Bardo National Museum",
        location: "https://www.google.ca/maps/place/Mus%C3%A9e+national+du+Bardo/@36.8094589,10.1340362,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd33b035d19d39:0x72c1cf14854e223c!8m2!3d36.80971!4d10.1340274?hl=fr",
        description: "The Bardo National Museum (Arabic: المتحف الوطني بباردو, romanized: al-Matḥaf al-Waṭanī bi-Bārdū; French: Musée national du Bardo) is a museum of Tunis, Tunisia, located in the suburbs of Le Bardo. It is one of the most important museums in the Mediterranean region and the second museum of the African continent after the Egyptian Museum of Cairo by richness of its collections.[1] It traces the history of Tunisia over several millennia and across several civilizations through a wide variety of archaeological pieces.",
        descriptionSource: "https://en.wikipedia.org/wiki/Bardo_National_Museum_(Tunis)",
        type: "Historical Museum",
        websiteLink: "http://www.bardomuseum.tn/",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tunis%2C_mus%C3%A9e_du_Bardo%2C_salle_de_Virgile_01.jpg/800px-Tunis%2C_mus%C3%A9e_du_Bardo%2C_salle_de_Virgile_01.jpg"
        ]
    },

    {
        id: 1,
        name: "Carthage Museuma",
        location: "https://www.google.ca/maps/place/Mus%C3%A9e+national+du+Bardo/@36.8094589,10.1340362,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd33b035d19d39:0x72c1cf14854e223c!8m2!3d36.80971!4d10.1340274?hl=fr",
        description: "This museum presents artifacts from two thousand years ago, when Carthage competed with Rome for military and cultural dominance. The Romans burned and pillaged the Phoenician city in 146 BC.",
        descriptionSource: "https://www.tripadvisor.com/Attraction_Review-g293754-d480611-Reviews-Carthage_Museuma-Carthage_Tunis_Governorate.html",
        type: "Historical Museum",
        websiteLink: "https://www.tripadvisor.com/Attraction_Review-g293754-d480611-Reviews-Carthage_Museuma-Carthage_Tunis_Governorate.html",
        images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/0c/ee/cb/68/caption.jpg"
        ]
    },

    {
        id: 2,
        name: "Saint Louis Cathedral",
        location: "https://www.google.ca/maps/place/Mus%C3%A9e+national+du+Bardo/@36.8094589,10.1340362,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd33b035d19d39:0x72c1cf14854e223c!8m2!3d36.80971!4d10.1340274?hl=fr",
        description: "Placed right next to carthage museum, this majestic cathedral was a nice surprise.Though the facade is not in its best shape the interior is very nice.You have to pay a small fee to enter.",
        descriptionSource: "https://www.tripadvisor.com/ShowUserReviews-g293754-d1943472-r693833853-Saint_Louis_Cathedral-Carthage_Tunis_Governorate.html",
        type: "Historical Museum",
        websiteLink: "http://www.cathedraledetunis.com/",
        images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/0a/48/1f/82/caption.jpg"
        ]
    }

]

//Render attractions
const attractionsEl = document.querySelector(".attractions");

function renderAttractions() {
    attractions.forEach((attraction) => {
      attractionsEl.innerHTML += `
      <div class="attractionCard" onClick="openAttractionWebsite(${attraction.websiteLink})">
            <img src="${attraction.images[0]}" alt="">
            <div class="cardTextSection">
                <a href=${attraction.websiteLink}><h4>${attraction.name}</h4></a>
                <p>${attraction.description}</p>
            </div>
        </div>`;
    });
}
renderAttractions();