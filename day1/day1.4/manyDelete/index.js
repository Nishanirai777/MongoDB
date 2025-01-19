const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
.then(()=>{
    console.log("connection ssucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    age:Number,
});
const User =mongoose.model("User",userSchema);
User.deleteMany({age:45})
.then((res)=>{
console.log(res);
})
//User.findOneAndUpdate({name:"saraj"},{age:88} ,{new:true})
//.then((res)=>{
 // console.log(res);
//})//
//.catch((err)=>{
  //console.log(err);
//});
//User.findOne({_id :"67872aed5b2c90c4637ad366"})
//User.findById("67872aed5b2c90c4637ad366")
//.then((res)=>{
  //console.log(res);
  //})
  //.catch((err)=>{
//console.log(err);
  //});
  
//User.insertMany([
  //  {name: "maite",email:"maite45@gmail.com", age: 45},
    //{name:"sabita", email:"sabita33@gmail.com",age:45},
    //{name:"nishan",email:"nishan45@gmail.com",age:26},

//])
//.then((res)=>{
//console.log(res);
//});
//const Employee = mongoose.model("Employee",userSchema);

//const user2= new User({
//name: "saraj",
//email: "saraj143@gmail.com",
//age: 22,
//});
//user2.save()
//.then((res)=>{
//    console.log(res);

//})
//.catch((err)=>{
  //  console.log(err);
//});
