// Inserting Data in mongo db
use UtkarshKart
db.items.insertOne({ name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98 })

db.items.insertMany([{ name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98 }, { name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 78 }, { name: "Vivo 30s", price: 114000, rating: 4.7, qty: 3334, sold: 987 },, { name: "Realme", price: 34000, rating: 4.3, qty: 1900, sold: 900 }, { name: "Poco", price: 55000, rating: 4.7, qty: 1000, sold: 372 }, { isBig: "True" }])