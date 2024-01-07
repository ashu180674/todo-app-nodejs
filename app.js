const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));


app.set('view engine', 'ejs');
let items = ["DSA","kubernetes","python"];

app.get("/",function(req,res){

 let today = new Date();
 let currentday = today.getDay();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
 };
 let day= today.toLocaleDateString("en-US",options);

 
 console.log();


res.render('list',{ kindofday: day,newitem:items });

});

app.post("/",function(req,res) {
  
let item = req.body.newitem;
 items.push(item);
 res.redirect("/");
})





app.listen(3000,function(){

    console.log("server started on port 3000");

});

