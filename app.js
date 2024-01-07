
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const date = require(__dirname+"/date.js");
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set('view engine', 'ejs');
let items = ["DSA","kubernetes","python"];
let workitems = [];

console.log(date.getdate);
app.get("/",function(req,res){

let day = date.getdate;
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

app.get("/work",function(req,res){
 res.render('list',{listtitle: "work list",newitem:workitems})
    
    })


app.get("/about",function (req,res){
     
    res.render('about');
})


app.listen(3000,function(){

    console.log("server started on port 3000");

});

