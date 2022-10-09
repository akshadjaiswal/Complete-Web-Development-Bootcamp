const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/akshadkart');
  console.log("we are connected") //printing for checking that we are connected or not.
}