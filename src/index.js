const path = require('path');
const express = require('express');

const app = express();
// let aa = 455;

const mypath = path.join(__dirname,'../public');
console.log(mypath);
app.use(express.static(mypath));    

app.get("/",(req,res)=>{
    res.send("hello from homepage");
});
app.get("/about",(req,res)=>{

    res.send("welcom to thapa about page")
});
// app.get("/temp",(req,res)=>{

    // res.status(200).json(
    //     [
    //     {
    //         id:34,
    //         name: "Abdullah"
    //     },
    //     {
    //         id:3445,
    //         name: "khan"
    //     }
    // ])
    // res.json(797899); 
//     res.json(
//         [2,3,4,"dgdfg"]
//     )
// });
// app.get("/head",(req,res)=>{

//     res.status(404).send("<h1>Page not Found : Status Code 404</h1>")
// });
app.listen(8000,()=>{
console.log("listening at port 8000");
})