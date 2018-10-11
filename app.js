const express = require('express');
const hbs = require('hbs');
const app = express();
const path= require('path');
const port =process.env.PORT || 3000;   //in hosting env, it picks up the right prot to listen to 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })


// app.get('/frontend', (req,res) =>{
//     res.send({
//         1:'HTML', 2:'CSS', 3:'JS'
//     })
// })

// app.get('/frontend/:id', (req,res) =>{
//     res.send(req.params.id);
// })


app.get('/',(req,res)=>{

    res.render('home.hbs',{
    title: "Home Page",
   
    year: new Date().getFullYear()
    
    });
    });

    
app.listen(port,() =>{
    console.log(`Listening to port ${port}`)
});

