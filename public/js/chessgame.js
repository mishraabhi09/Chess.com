// Setting the "socket_io" in the frontend 
const socket = io();

// "emit()" is used to send data to the backend-->>
socket.emit("This is coming from frontend");

// "on()" is used to display message when some sort of data is recieved from backend
socket.on("Message send from backend" , ()=>{
    console.log("Message send from Backend");
})