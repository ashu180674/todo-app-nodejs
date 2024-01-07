const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set('view engine', 'ejs');
let items = ["DSA","kubernetes","python"];
let workitems = [];


app.get("/",function(req,res){

 let today = new Date();
 let currentday = today.getDay();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
 };
 let day= today.toLocaleDateString("en-US",options);


res.render('list',{ listtitle: day,newitem:items });


});

app.post("/",function(req,res) {
  
let item = req.body.newitem;
 if(req.body.list=="work"){
 
 workitems.push(item);
 res.redirect("/work");

 }else{
    items.push(item);
 res.redirect("/");
 }


})

// let item = req.body.newitem;
// workitems.push(item);
// res.redirect("/work");

app.get("/work",function(req,res){
 res.render('list',{listtitle: "work list",newitem:workitems})
    
    })




app.listen(3000,function(){

    console.log("server started on port 3000");

});

