const express= require("express");
const app = express();
app.get("/api/main",(req,res)=>{
    res.send("Hi");
    res.send("<h1>Hi I Am Kusuma</h1>");
    res.send({
        "fname":"Kalvakollu",
        "lname":"KusumaKrishna"
})
res.end();
})
app.listen(9090,function(){
    console.log("Server is running");
})