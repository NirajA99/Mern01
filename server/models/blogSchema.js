
const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true,
        minlength : 5,
        maxlength : 50
    },
    content : {
        type : String,
        required : true,
        trim : true,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User' ,
        required : true 
    } ,
    isEdited : {
        type : Boolean ,
        default : false 
    }
},
{ 
    timestamps : true 
}
)

const Blog = mongoose.model("Blog" , BlogSchema )

module.exports = Blog 