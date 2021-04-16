const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const psotSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    completed:{
        type: Boolean,
        default: false
    }
    
})

module.exports = mongoose.model('post', psotSchema);