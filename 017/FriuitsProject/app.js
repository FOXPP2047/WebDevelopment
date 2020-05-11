const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Mango",
  rating: 7,
  review: "Decent"
});

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("People", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "My favorite"
});

pineapple.save();
//fruit.save();
//
const person = new Person({
  name: "John",
  age: 37,
  //favoriteFruit: pineapple
});

person.save();

// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 10,
//   review: "Perfect"
// });
//
// const orange = new Fruit({
//   name: "orange",
//   rating: 4,
//   review: "Too sour for me"
// });
//
// const banana = new Fruit({
//   name: "banana",
//   rating: 3,
//   review: "Weird Texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Sucessfully save to DB");
//   }
// });

// Fruit.find(function(err, fruits) {
//   if(err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

Person.updateOne({name: "John"}, {favoriteFruit: fruit}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Sucessfully updated john's favorite fruit");
  }
});
Fruit.updateOne({_id: "5eb8c87d90b7e85338d615cb"}, {name: "Peach2"}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Sucessfully Updated");
  }
});

// Fruit.deleteOne({_id: "5eb8bc95f0e03c3768835fe3"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Sucessfully deleted");
//   }
// });

// Person.deleteMany({name: "John"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Sucessfully deleted all john");
//   }
// });
//fruit.save();
