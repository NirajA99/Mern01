const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mern01');

const db = mongoose.connection;


db.once('open', ()=>{
    console.log('Connected With Database!');
});

db.on('error', () => {
    console.log("Couldn't Connect with database!");
});

module.exports = db;