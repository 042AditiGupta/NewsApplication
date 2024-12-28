//step 1--  import required modules
const express=require("express");
const mongoose=require("mongoose");

//step 2-- initialise the express app
const app=express();
//2 types of middleware application,router type
app.use(express.json()); //middleware

//step 3 --  import model
const NewsModel=require("./models/news.js");

// step 4 -- start the server
//5050 is the port number, port number should be greater than 3000 itself
app.listen(5050,()=>{});


// step 5 -- defines the routes
//Route : root route
app.get("/",(req,res)=>{
res.json({name:"aditi"});
})

//Route 2: Add news(POST)
app.post("/api/addnews",async(req,res)=>{
})


app.get("/api/news",async(req,res)=>{
try{
   const news=await NewsModel.create(req,res);
   res.status(200).json(news);
   console.log(req.body);
}
catch(error)
{
  res.send(500);
}
{
}});
 

app.get("/api/news",async(req,res)=>{
try{
    const news =await NewsModel.find({});
    res.status(200).json(news);
    console.log(req.body);
    
}
  catch(error)
{
   res.send(500);
}
});
app.get("/api/news/:id",async(req,res)=>{

  try{ const {id}=req.params;
   const news = await NewsModel.findById(id);
   res.status(200).json(news);
}
  catch(error)
{
  res.send(500);
}
});

app.put("/api/news/:id",async(req,res)=>{
 try{
     const { id }=req.params;
      const news = await NewsModel.findByIdAndUpdate(id,req.body);
       if(!news){
        return res.status(404).json({Message:"News not found"});
 }
      const updatenews= await NewsModel.findById(id);
      res.status(200).json(updatenews);
}
    catch(error)
{
    res.send(500);
 }
});

app.delete("/api/news/:id",async(req,res)=>{
 try{
      const {id}=req.params;
      const news=await NewsModel.findByDelete(id,req.body);
      if(!news){
         return res.status(404).json({Message:"news not found"});
}
      const updatenews=await NewsModel.findById(id);
      res.status(200).json("Deleted");
 }
catch(error)
{  
   res.send(500);
}

});


connect(
      "mongodb+srv://Aditi123_Gupta:PhPwxP59HKhE2G7G@cluster0.7da7d.mongodb.net/"
)
.then(()=>{
   console.log("connected to DB");
})





