const mongoose = require('mongoose')
// define connection string
mongoose.connect('mongodb://localhost:27017/household',()=>{
    console.log('Mongodb connection succesfully established...');
})

// creating a model to store all houses
const House=mongoose.model('House',{
    id:Number,
  image1:String,
  image2:String,
  image3:String,
  image4:String,
  title:String,
  location:String,
  owner:String,
  contact:String,
  cent:String,
  floor:String,
  type:String,
  rooms:String,
  bhk:String,
  year:String,
  price:String, 
  other:String
})

module.exports={
    House
}