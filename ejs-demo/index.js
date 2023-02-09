const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
 console.log(path.join(__dirname,'../templateViews'));

app.set('view engine','ejs');

 const myPath = path.join(__dirname,'../templateViews');
 app.set("views",myPath);

app.get("/",(req,res)=>{
    res.send("this is home page");
})
app.get("/about",(req,res)=>{
    res.send("this is about lfjwrfw page");
})
app.get("/profile",(req,res)=>{
    const user = {
        name : "Abdullah",
        city : "Balakot",
        uni : "Comsats university",
        skills : ["c","js","java","NodeJs","DB"]

    }
    
    res.render(path.join(__dirname,'../templateViews/profile'),{user});
})

app.listen(8000,()=>{
    console.log("listening at port 8000");
})