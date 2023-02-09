const reqFilter = (req,res,next)=>{
    if (!req.query.age) {
        res.send("Please provide your age for accessing the page");

    }
    else  if (req.query.age<18) {
        res.send("You cant access to this page");

    }
    else{

        next();
    }
}
module.exports = reqFilter;