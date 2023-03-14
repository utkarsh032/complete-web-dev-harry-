// Searching Data in mongo db
use UtkarshKart

// This query will return all the objects with rating 3.5
db.items.find({ rating: 4.5 })
db.items.find({ rating: { $gte: 4.5 } })
db.items.find({ rating: { $gt: 4.5 } })

//And Operator
db.items.find({ rating: { $gt: 4.5 }, price: { $gt: 5000 } })

db.items.find({ rating: { $lt: 4.5 }, price: { $lt: 114000 } })


db.items.find({
    $or: [{ rating: { $lt: 4.5 } }, { price: { $gt: 114000 } }]
})

db.items.find({ rating: { $gt: 4.5 } }, { rating: 1 })