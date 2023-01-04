let mongoose = require('mongoose')
let timestampPlugin = require('./plugins/timestamp')
let userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    createdAt : Date,
    updatedAt : Date
})
userSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName
})
userSchema.virtual('fullName').set(function(name) {
    let str = name.split(' ')
    
    this.firstName = str[0]
    this.lastName = str[1]
})
userSchema.methods.getInitials = function(){
    return this.firstName[0]+this.lastName[0]
}
userSchema.plugin(timestampPlugin)
module.exports = mongoose.model('User',userSchema)