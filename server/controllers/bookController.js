const io=require('../config/socket');

exports.addBook=async(req,res)=>{
  try{
    const book=await Book.create(req.body);
    io.emit('newBook',book);
    res.status(201).json(book);
  }catch(error){
    res.status(500).json({
      error:message
    });
  }
}