const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
.then(()=>{
    console.log("connection ssucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bookSchema = new mongoose.Schema({
     title :{
        type : String,
        required : true,
     },
     author :{
        type :String,
     },
     price :{
        type: Number,
     },
});
const Book = mongoose.model("Book",bookSchema);
let book1 = new Book ({
title : "Love",
author : "Dr.sabita",
price :1000
})
book1.save().then(res =>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});