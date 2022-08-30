//Grab Element and declare array for testimonials
//Set up testimonails and grab element
const testimonails = [{text: "I had goot time"},]
const testEL = document.getElementById("testimonialSection")

//Render Testimonails 
function renderTestimonails() {
    console.log(testEL);
    testimonails.forEach((testimonial) => {
        testEL.innerHTML += `
        <div class="testimonialCard" >
            <p>${testimonial.text}</p>
        </div>`
    });
}

renderTestimonails();

// Client side Websocket
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log('Message from server ', data);
};

//Send message to server 
document.querySelector('.wsButton').onclick = () => {
    data = document.getElementById("testimonial").value
    testimonails.push(data.toString())
    console.log(testimonails);
    renderTestimonails();
    socket.send(data.toString());
}

