const express = require ("express");
// import from db
const quizzes = require ("../db/quizzes");
//used to use this quizes as routes ny express
const quizRouter = express.Router();

quizRouter.route("/").
get((req,res)=>{
    // res.send(quizzes.data);
    res.json(quizzes.data);
})

module.exports = quizRouter;

