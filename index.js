const express = require("express");

//to connct BE and FE
const cors = require("cors");
//for db
const quizRouter = require("./router/quiz.router");

//for user
const userdata = require("./db/users");

const app = express();

const PORT = 3000;

app.use(cors());

//to use json 
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello, Abhi here..123")
});

//to demonstarate link in main link
app.use("/quiz",quizRouter);

app.post("/auth/login",(req,res)=>{

const {username, password} = req.body;
// res.json({username,password,message:"got the users data"});
const isUserVerified = userdata.users.atsome(user=>user.name ===username &&
                                user.password === password);
        if(isUserVerified){
            res.status(200).json({message:"user verified"})
        }
        else{
            //.status
           res.status(401).json({message: "Invalid Credentials"})
        }

});




//for heroku process.env.Port needed
app.listen(process.env.PORT ||PORT,()=>{
console.log("server is started now")
});

