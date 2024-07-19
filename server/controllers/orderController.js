
const io=require('../config/socket');
const adminController=require('./adminController');



exports.updateOrderStatus = async (req, res) => {
  try {
    
    const order = await Order.findByPk(req.params.id);
    if(order){
      order.status=req.body.status;
      await order.save();
      io.emit('ordeStatusChange',order);
      adminController.notifyOrdeStatusChange(order);
      res.json(order);
    }else{
      res.status(404).json({message:'order not found'});
    }
  } catch (err) {
    res.status(500).json({error:error.message})
  }
};
