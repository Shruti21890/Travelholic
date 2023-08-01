const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const viewsPath = path.join(__dirname,'views')

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
// app.use(express.urlencoded())

// PUG SPECIFIC STUFF
// app.set('view engine', 'pug') // Set the template engine as pug
// app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
// app.get('/', (req, res)=>{
//     res.status(200).render('index.pug');
// })
// app.get('/contact', (req, res)=>{ 
//     res.sendFile('contact.');
// });

app.get('/',(req,res)=>{
    res.sendFile(`${viewsPath}/index.html`)
})

app.get('/contact',(req,res)=>{
    res.sendFile(`${viewsPath}/contact.html`)
})
// app.get('/contact', (req, res)=>{
//     res.status(200).render('contact.html');
// })

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
