show dbs
use UtkarshKart
Show collections

db.items.find({price: 29000})

//Deleting items from the Mongo Database
db.items.deleteOne({price: 29000})
// DeleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: 22000})