const express = require("express");

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello, Abhi here............")
});

//for heroku process.env.Port needed
app.listen(process.env.PORT ||PORT,()=>{
console.log("server is started now")
});

