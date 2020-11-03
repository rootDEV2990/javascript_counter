// Edit your script here
var score = 0 //this a counter that will log right answers
var user_inputs = [] //this is empty array that answers will be pushed to
//this is the array with quetions for our game
var questions = [
	"What is the best programing language : ",
    "Whats the best programing OS : ",
]
//this is array with right answers
var answers = [
	"javascript",
    "linux",
]
//here we start loop for every item inside questions
for (i = 0; i < questions.length; i++) {
	//this pops up input window for user
    var input = window. prompt(questions[i]); 
    //this adds user inputs to array
	user_inputs.push(input.toLowerCase());
    //this checks answers by index
	if(input.toLowerCase() == answers[i]){
    	//this increments counter if user answer is acceptable
    	score++
	};
};
//this window lists answers via array
window.alert("Heres a record of your logged answers " + user_inputs + "\n", "Continue");
//this shows you your score
window.alert("You scored " + score, "Quit");