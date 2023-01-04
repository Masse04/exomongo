let mongoose = require('mongoose')
let timestampPlugin = require('./plugins/timestamp')
let validator = require('validator')
let emailSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        validate : (value) => {
            return validator.isEmail(value)
        }
    }
})
emailSchema.plugin(timestampPlugin)
module.exports = mongoose.model('Email',emailSchema)