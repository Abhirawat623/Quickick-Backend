const express = require("express");

//for db
const quizzes = require("./db/quizzes");

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello, Abhi here..123")
});

app.get("/quiz",(req,res)=>{
      res.send(quizzes.data);
})

//for heroku process.env.Port needed
app.listen(process.env.PORT ||PORT,()=>{
console.log("server is started now")
});

