const express=require("express");
const app=express();
 const port=3000;

app.use(express.json()); // app.use is a middleware(application middleware)

//there are two types of routes are used 1.app.get  2.app.post

app.get("/",(req,res)=>{
res.send("good night");

});

app.post("/post",(req,res)=>{
const {id,name}=req.body;
console.log("Received Data");
 res.send("Received data");
});

app.listen(port(),()=>{
   console.log(`example app listening on port $(port)`);
});

