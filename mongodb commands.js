// Inserting Data in MongoDb
use akshadkart

db.items.insertOne({name:"Samsung 30s", price:42000, rating:4.5,qty:233,sold:98})

db.items.insertMany([{name:"Samsung 30s", price:42000, rating:4.5,qty:233,sold:98},{name:"Realme 6", price:16000, rating:4.5,qty:355,sold:224}])

db.items.find() //to see the data