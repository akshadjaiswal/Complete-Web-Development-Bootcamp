const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/akshadkart");
  console.log("we are connected"); //printing for checking that we are connected or not.
}
const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting =  "My name name is " + this.name;
  console.log(greeting);
};


const Kitten = mongoose.model('Kitten', kittySchema);

const akshadKitty = new Kitten({ name: 'akshadKitty' });
console.log(akshadKitty.name);
akshadKitty.speak(); 
