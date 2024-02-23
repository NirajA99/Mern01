const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        minlength : 5,
        maxlength : 15
    },
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
    },
    confirmpassword : {
        type : String,
        trim : true,
        minlength : 8,
        maxlength : 15
    },
    gender : {
        type : String,
        enum: ['male', 'female'],
        required : true
    },
    number : {
        type : Number,
        required : true,
        unique : true
    },
    bloggertype : {
        type : String,
        default : 'daily',
        required : true,
    }


},
{
    timestamps : true
}
);

const User = mongoose.model('users', UserSchema);

module.exports = User;

