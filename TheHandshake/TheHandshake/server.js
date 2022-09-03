const express = require('express');
const cors = require('cors');
const { Socket } = require('socket.io');
const app = express();
// require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require('./server/routes/authors.routes')(app);
const server = app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
const io = require('socket.io')(server, { cors: true });
io.on("connection",socket=>{
    console.log("Nice to meet you. (shake hand)")
    socket.on("handle_message_recieved",(data)=>{
        // console.log("I'm a server and I recieve: ",data)
        socket.broadcast.emit("handle_message_recieved",data)
    })
    
    
})