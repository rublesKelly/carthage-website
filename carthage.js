const carthageImages = [

    src="src/resources/Carthage/408d90e14fbd3579c031ddf32bf695c3.png",
    src="src/resources/Carthage/7a46569fd2dc852e4c569e5d4e0aee19.png",
    src="src/resources/Carthage/97a075a42e088f420e473e4aadf070a8.png",
    src="src/resources/Carthage/c06d924f60cc67913c2b512474794393.png",
    src="src/resources/Carthage/1280px-Carthage_National_Museum_representation_of_city.jpg",
    src="src/resources/Carthage/carth2.png",
    src="src/resources/Carthage/cartha3.png",
    src="src/resources/Carthage/cb1d8627e3582593547b6fda7ea0bf58.png",
    // src="src/resources/Carthage/Nuremberg_chronicles_f_40v_2.png",
    // src="src/resources/Carthage/Tunisie_Carthage_Ruines_08.JPG"
]

//Render Images
const imgGridEl = document.querySelector(".imgGrid");

function renderImages(){

    carthageImages.forEach((src, index) => {
        imgGridEl.innerHTML += `
        <img class="w3-opacity-min" src="${src}" alt="Image not found" >`
    })
}

renderImages();