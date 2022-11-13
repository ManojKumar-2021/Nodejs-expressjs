
const express =require("express");
// pody parser for taking input value from frontend
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

// sending index.html file when user visit to home page
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname);
})

//we are taking input from user and applying sume business logic and sending result to user
app.post("/",function(req,res){
// getting value from frontend
    var num1=parseInt(req.body.num1);
    var num2=parseInt(req.body.num2);
    var result=num1+num2;
    res.send(`sum of ${num1} and ${num2} is = ${result}`)
})

// sending bmiCalculator.html file when user visit to /bmicalculator page
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

//we are taking input from user and applying sume business logic and sending result to user
app.post("/bmicalculator",function(req,res){

    let weight=parseFloat(req.body.weight)
    let height=parseFloat(req.body.height)
    let bmi=weight/(height*height)
    res.send(`your height is ${height}feet and weight is ${weight}kg so BMI = ${bmi.toPrecision(3)}`)
})


// server initailize
app.listen(3000,function(){
    console.log("server is running on port 3000");
})