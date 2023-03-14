show dbs
use UtkarshKart
Show collections

db.items.find()
db.items.updateOne({name:"Realme"}, {$set: {price:2}})
db.items.find()
db.items.updateMany({name:"Moto 30s"}, {$set: {price:8, rating:1}})