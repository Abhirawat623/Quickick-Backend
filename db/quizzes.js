//import {v4 as uuid} from "uuid";
const {v4:uuid} =require("uuid");

const quizzes = {
    "data":[

        //1st- title,des,cat,quiz
        {
          id:uuid(),
          category: "Marvel",
          imageUrl :"https://i.pinimg.com/originals/53/1f/58/531f58760ed5d1828d08b2c7e8652a44.jpg",
          description: "Let's Check your knowledge of Marvel",
          quiz:[
            {
                id:uuid(),
                question: "What is the name of Starlord's father?",
                options:[
                    {id:uuid(),option:"Thanos", isRight: false},
                    {id:uuid(),option:"Youndu", isRight: false},
                    {id:uuid(),option:"Ego", isRight: true},
                    {id:uuid(),option:"Collector", isRight: false}
                ]
            },
            {
                id:uuid(),
                question: "Who is immortal among these?",
                options:[
                    {id:uuid(),option:"Hulk", isRight: false},
                    {id:uuid(),option:"Thor", isRight: true},
                    {id:uuid(),option:"Winter Soldier", isRight: false},
                    {id:uuid(),option:"Gamora", isRight: false}
                ]
            },{
                id:uuid(),
                question: "Who gave up time stone to save Tony Stark?",
                options:[
                    {id:uuid(),option:"Doctor Strange", isRight:true},
                    {id:uuid(),option:"Vision", isRight: false},
                    {id:uuid(),option:"Hawk Eye", isRight: true},
                    {id:uuid(),option:"Spider Man", isRight: false}
                ]
            },{
                id:uuid(),
                question: "Who is God of Mischief?",
                options:[
                    {id:uuid(),option:"Drax", isRight: false},
                    {id:uuid(),option:"Groot", isRight: false},
                    {id:uuid(),option:"Loki", isRight: true},
                    {id:uuid(),option:"Thor", isRight: false}
                ]
            },{
                id:uuid(),
                question: "Who betrayed the evengers in Endgame?",
                options:[
                    {id:uuid(),option:"Rocket", isRight: false},
                    {id:uuid(),option:"Gamora", isRight: false},
                    {id:uuid(),option:"Natasha", isRight: false},
                    {id:uuid(),option:"Nebula", isRight: true}
                ]
            }
          ]
        
        },

        {
            id:uuid(),
            category: "Dragon Ball",
            description: "Let's Check your knowledge of Dragon ball",
            imageUrl :"https://i.pinimg.com/originals/cc/91/b3/cc91b3bad422a943b0f4848f9fa476ae.jpg",
            quiz:[
              {
                  id:uuid(),
                  question: "Who is the god of destruction of Universe 7?",
                  options:[
                      {id:uuid(),option:"Beerus", isRight: true},
                      {id:uuid(),option:"Vegita", isRight: false},
                      {id:uuid(),option:"Omniking", isRight: false},
                      {id:uuid(),option:"Picolo", isRight: false}
                  ]
              },
              {
                  id:uuid(),
                  question: "What's the name of wife of Goku?",
                  options:[
                      {id:uuid(),option:"Bulma", isRight: false},
                      {id:uuid(),option:"Chee-chee", isRight: true},
                      {id:uuid(),option:"Videl", isRight: false},
                      {id:uuid(),option:"kale", isRight: false}
                  ]
              },{
                  id:uuid(),
                  question: "What is the new form of Frieza ?",
                  options:[
                      {id:uuid(),option:"Silver", isRight:false},
                      {id:uuid(),option:"Diamond", isRight: false},
                      {id:uuid(),option:"Bronze", isRight:false},
                      {id:uuid(),option:"Golden", isRight: true}
                  ]
              },{
                  id:uuid(),
                  question: "kakarot is the real name of which character?",
                  options:[
                      {id:uuid(),option:"Boo", isRight: false},
                      {id:uuid(),option:"Vegita", isRight: false},
                      {id:uuid(),option:"Goku", isRight: true},
                      {id:uuid(),option:"Beerus", isRight: false}
                  ]
              },{
                  id:uuid(),
                  question: "Who was the first master of Goku?",
                  options:[
                      {id:uuid(),option:"Beerus", isRight: false},
                      {id:uuid(),option:"Omniking", isRight: false},
                      {id:uuid(),option:"Bulma", isRight: false},
                      {id:uuid(),option:"Roshi", isRight: true}
                  ]
              }
            ]
          
          }
        

    ]
}

module.exports = quizzes