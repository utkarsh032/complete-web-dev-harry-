
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UtkarshKart', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

// db.once('open', function () {
//     console.log("We are connected Bro/Sis..")
// });

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    var greeting = "My name is " + this.name
    console.log(greeting);
};

var Kitten = mongoose.model('UtkarshKitty', kittySchema);

var UtkarshKitty = new Kitten({ name: 'UtkarshKitty' });
var UtkarshKitty2 = new Kitten({ name: 'UtkarshKitty2' });
// console.log(UtkarshKitty.name); 
// UtkarshKitty.speak();

UtkarshKitty.save(function (err, UtkarshKitty) {
    if (err) return console.error(err);
    // UtkarshKitty.speak();
});

UtkarshKitty2.save(function (err, U) {
    if (err) return console.error(err);
    // U.speak();
});
Kitten.find( {name: "UtkarshKitty2" }, function(err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})