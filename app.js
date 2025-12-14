const express = require("express");
const socket  = require("socket.io");
const http  = require("http");
const {Chess} = require("chess.js");
const path = require("path");

const app = express();

// http.createServer(app) -->> this line connect the server made by express and http
const server = http.createServer(app);
//socket works on that server which http made-->>
const io = socket(server);


const chess = new Chess();

let player = {};
let currentPlayer = "w";

app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));

app.get("/" , (req, res)=>{
    res.render("index");
})

// the "socket" which is passed inside the arrow function is the unique info about the connected user
// which is just connected through server of chess.com

// we have to connect "socket.io" to our frontend and backend both
// then only it should connect properly
io.on("connection" , (uniquesocket)=>{
     console.log("user connected");

     // the data which we send from the frontend , recieved on backend in as a "uniquesocket"-->>

    //  uniquesocket.on("This is coming from frontend" , ()=>{
    //     // when message is recieved to backend side
    //     // it will send a message to every connected user-->>
    //     io.emit("Message send from backend");
    //  })


    //  uniquesocket.on("disconnect" , ()=>{
    //     console.log("disconncted");
    //  })

    
});

server.listen(3050 , ()=>{
   console.log("Server is working fine on Http.")
});

