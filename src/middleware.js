const express = require('express');
const reqFilter = require('./midleData');
const app = express();
// this is example of application middleware where middleware implements on every  route
// app.use(reqFilter);


const route = express.Router();
route.use(reqFilter);
app.get("/",(req,res)=>{
res.send("welcome to home page");
})
route.get("/about",(req,res)=>{
    res.send("welcome to about page");
    })
    route.get("/contact",(req,res)=>{
        res.send("welcome to contact page");
        })

        app.use('/',route);

app.listen(5000,()=>{
console.log("listening to port 5000");
})
