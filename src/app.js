const exress = require('express');
const app = exress();

app.get("/",(req,res)=>{
res.send("hello is this my first express js programe")

})
app.listen(8000,()=>{
    console.log("listening to port 8000");
})