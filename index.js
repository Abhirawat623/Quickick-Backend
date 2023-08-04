const express = require("express");

//to connct BE and FE
const cors = require("cors");
//for db
const quizRouter = require("./router/quiz.router");

const app = express();

const PORT = 3000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello, Abhi here..123")
});

//to demonstarate link in main link
app.use("/quiz",quizRouter);

//for heroku process.env.Port needed
app.listen(process.env.PORT ||PORT,()=>{
console.log("server is started now")
});

