const express = require("express");

//for db
const quizRouter = require("./router/quiz.router");

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello, Abhi here..123")
});

app.use("/quiz",quizRouter);

//for heroku process.env.Port needed
app.listen(process.env.PORT ||PORT,()=>{
console.log("server is started now")
});

