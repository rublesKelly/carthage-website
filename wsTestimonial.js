// Client side Websocket
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log('Message from server ', data);
};

//Send message to server 
document.querySelector('.wsButton').onclick = () => {
    socket.send('hello');
}