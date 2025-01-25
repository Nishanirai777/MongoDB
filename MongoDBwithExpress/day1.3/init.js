const mongoose = require('mongoose');
const Chat = require('./models/chat.js');




main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let allChats = [
    {
    from :"nisha",
    to: "saraj",
    msg:"best of luck",
    created_at : new Date(),

},
{
    from :"aman",
    to: "sakti",
    msg:"best of luck",
    created_at : new Date(),

},
];

 Chat.insertMany(allChats);

