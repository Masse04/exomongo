let mongoose = require('mongoose')
let emailModel = require('./models/email')
let userModel = require('./models/users')
const server = '127.0.0.1:27017'
const database = 'myDB' 
class Database{
    constructor(){
        this._connect()
    }
_connect(){
    mongoose.connect(`mongodb://${server}/${database}`)
    .then(()=>{
        console.log('Database connection successful')
    })
    .catch(err =>{
        console.error('Database connection error')
    })
}}
let msg = new emailModel({
    email : 'MASSAMBA084@GMAIL.COM'
})
msg.save()
.then(doc => {
    console.log(doc)
    })
.catch(err => {
    console.error(err)
    })
let model = new userModel({
    fullName : 'Thomas Anderson'
})
model.save()
.then(doc => {
    console.log(doc)
    })
.catch(err => {
    console.error(err)
    })
console.log(model.toJSON())
console.log()
console.log(model.fullName)
let initials = model.getInitials()
console.log(initials)
module.exports = new Database()