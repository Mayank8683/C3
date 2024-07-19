const socketIo =require('socket.io');
const io=socketIo();
io.on('connection',(socket)=>{
    console.log('user connected');
    socket.on('disconnect',()=>{
        console.log('User Disconnected');
    })
    socket.on('newBook',(book)=>{
        io.emit('newBook',book);
    })
})

module.exports=io;