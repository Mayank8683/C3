const cron=require('node-cron');
const email=require('./email');
cron.schedule('0 0 * * 0',()=>{
    email.sendPromotionalEmails();
})