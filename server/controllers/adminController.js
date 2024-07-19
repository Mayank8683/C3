const io=require('../config/socket');
exports.notifyNewOrder=(order)=>{
    io.emit('newOrder',order);
};

exports.notifyOrderStatusChange=(order)=>{
    io.emit('orderStatusChange',order);
};
