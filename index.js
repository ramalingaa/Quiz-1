var readlineSync = require("readline-sync");
var score = 0;
//function for userinput check
function checkInput(question,answer){
  var userInput = readlineSync.question(question);
  if(userInput === answer){
    console.log("Yes,you are right");
    score += 1;
  }else {
    console.log("Sorry, you missed it,try recollecting it");
    // use it for negative marking
    score -= 1;
    
  }

}

// questions list
var questionList = [{
  question:"Where do Ram live ?",
  answer: "Hyderabad"
  },
  {
    question:"Where did he study ?",
    answer:"Cbit"
  },
{
  question:"Where was his first job ?",
    answer:"Cognizant"

},
{
  question:"What is his birthyear ?",
    answer:"1996"

},
{
  question:"Which sport he likes most ?",
    answer:"Cricket"

}
]
 // condition
for(i=0;i<5;i++){
    printQuestion = questionList[i].question;
    printAnswer = questionList[i].answer;
    checkInput(printQuestion,printAnswer)
}
console.log("You scored " + score +"out of 5 ")