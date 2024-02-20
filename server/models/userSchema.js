const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        minlength : 5,
        maxlength : 15
    }, 
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minlength : 8,
        maxlength : 15
    }
},
{
    timestamps : true
}
);

const User = mongoose.model('users', UserSchema);

module.exports = User;

