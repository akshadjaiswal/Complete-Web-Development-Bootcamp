const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/akshadkart");
  //printing for checking that we are connected or not.
  //console.log("we are connected"); 
}

const kittySchema = new mongoose.Schema({
  name: String,
});

kittySchema.methods.speak = function speak() {
  const greeting = "My name name is  " + this.name;
  console.log(greeting);
};

const Kitten = mongoose.model("akshadKitty", kittySchema);

const akshadKitty = new Kitten({ name: "akshadKitty" });
const akshadKitty2 = new Kitten({ name: "akshadKitty2" });
// console.log(akshadKitty.name);
// akshadKitty.speak();

akshadKitty.save(function (err, akshadKitty) {
  if (err) return console.log(err);

  akshadKitty.speak();
});

akshadKitty2.save(function (err, k) {
  if (err) return console.log(err);
  // k.speak();
});

Kitten.find({ name: "akshadKitty2" }, function (err, kittens) {
  if (err) return console.log(err);
  console.log(kittens);
});
