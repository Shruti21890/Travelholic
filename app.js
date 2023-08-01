const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
var mongoose = require('mongoose');
const bodyparser = require('body-parser')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contact')};
const port = 80;

const viewsPath = path.join(__dirname,'views')
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    Age: String,
    email: String,
    Address: String
  });
  const contact = mongoose.model('contact', contactSchema);

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.sendFile(`${viewsPath}/index.html`)
})
app.get('/Iteneary',(req,res)=>{
    res.sendFile(`${viewsPath}/Iteneary.html`)
})
app.get('/contact',(req,res)=>{
    res.sendFile(`${viewsPath}/contact.html`)
})

app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);s
    myData.save().then(()=>{
    res.send('This item has been saved to the database')
    }).catch(()=>{
    res.status(400).send('item was not saved to the databse')
})
    // res.sendFile(`${viewsPath}/contact.html`)
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
