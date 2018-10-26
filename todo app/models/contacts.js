const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    PEC_ID:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    cnic:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        required: true
    }

});

const Contact = module.exports = mongoose.model('Contact',ContactSchema);
