const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const partialPath = path.join(__dirname,'../templateViews/partials');
const myPath = path.join(__dirname,'../templateViews/views');


app.set("view engine",'hbs');
app.set("views",myPath);

//Adding style file to this file
// const styleVar = path.join(__dirname,'../public');
// app.use(express.static(styleVar));


hbs.registerPartials(partialPath);


app.get('/',(req,res)=>{
    // const name = "Abdullah";
    res.render('index',{
        name:"Abdullah"
    });
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/about/*',(req,res)=>{
    res.render('404',{
        errorCom : "Oops this about page couldn't found"
    });
})
app.get('*',(req,res)=>{
    res.render('404',{
        errorCom : "Oops page couldn't found"
    });
})



app.listen(5000,()=>{
    console.log("listening to port 5000");
})