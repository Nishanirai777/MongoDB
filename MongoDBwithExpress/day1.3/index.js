const express = require("express");
const app = express();
// getting-started.js
const mongoose = require('mongoose');
const path = require("path");
const Chat = require('./models/chat.js');
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let chat1 = new Chat ({
    
    from :"nisha",
    to: "saraj",
    msg:"best of luck",
    created_at : new Date(),

});
chat1.save().then((res)=>{
console.log(res);
});



app.get("/", (req, res) => {
    res.send(" root is working ");
});
app.listen(4040, () => {
    console.log("server is listening on port 4040");
});