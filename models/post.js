const mongoose  = require("mongoose")

const postSchema = mongoose.Schema({
    gun: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    
    bulletused: {
        type: String,
        required: true
    },
    
 
    
});
module.exports = mongoose.model('posts', postSchema)
