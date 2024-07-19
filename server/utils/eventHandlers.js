const emitter=require('./eventEmitter');
const adminController =require('../controllers/adminController')

emitter.on('orderPlaced',(order)=>{
    console.log('order Placed',order);
    adminController.notifyOrderStatusChange(order);
});