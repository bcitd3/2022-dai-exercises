export const header = "Answer these questions!";

export const qs = [
    {
      title:"How are you doing?",
      ops:["Good", "Bad", "Lovely"]
    },
    {
        title:"How are you feeling?",
        ops:["Happy", "Anxious", "Sad", "Disappointed"] 
    },
    {
        title:"What are you planning to do?",
        ops:["Go Running", "Do Nothing", "Eat Desserts"] 
    }
    
]

export const res = {
    Good:{
        img:"https://placekitten.com/200/200",
        text:[
            "That is wonderful to hear",
            "I love you attitude"
        ]
    }
}

//storing the answers
var answers = [];

export function ChangeAnswers(n, qnum){
    //if we are on 0th index (qnum), we store the anser on ansers[0] ... same with answers[1] ... etc
    answers[qnum] = n;
    console.log(answers);
}

export function GetAnswers(){
    return answers;
}

//Storing the name
var name = "";

export function ChangeName(n){
    name = n;
    console.log(name);
}

export function GetName(){
    return name;
}