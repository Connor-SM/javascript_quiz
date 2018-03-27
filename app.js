// Step 1: Create array of q's and a's
var questions = [
  ["What year did the Boston RedSox break the curse?", "2004"],
  ["How many climate groups (out of 5) does the big island of Hawaii have?", "4"],
  ["What is an ankles' favorite food?", "Bologna"],
  ["How many pennies are in a dollar?", "100"],
  ["How tall is the Statue of Liberty? (in feet)", "305"],
  ["What team does Tom Brady play for?", "Patriots"]
];

var answers = [];
var correctAns = [];
var wrongAns = [];

// Step 2: Create function that asks q's in alerts
function askQuestions(questions, answers) {
  for (var i = 0; i < questions.length; i++) {
    // Step 2a: Store answers in an array variable
    answers[i] = prompt(questions[i][0]);
  };
};

// Step 3: Check answers to see which are correct
function checkAnswers(questions, answers) {
  for (var i = 0; i < answers.length; i++) {
    if (questions[i][1] == answers[i]) {
      correctAns.push(questions[i]);
    } else {
      wrongAns.push(questions[i]);
    }
  };
};

// Step 4: Display results
function displayResults(correct, wrong) {
  $("#content").html(
    "<h1>Javascript Quiz Results</h1>" +
    "<h3>You answered " + correct.length + " questions correctly!</h3>" +
    "<br><br><h5><b>Correctly Answered Questions:<b></h5>"
  );
  for (var i = 0; i < correct.length; i++) {
    $("#content").append(
      (i + 1) + ") " + correct[i][0] + "<br>Answer: " + correct[i][1] + "<br><br>");
  };
  $("#content").append(
    "<br><br><h5><b>Questions Answered Wrong:</b></h5>");
  for (var i = 0; i < wrong.length; i++) {
    $("#content").append(
      (i + 1) + ") " + wrong[i][0] + "<br>Answer: " + wrong[i][1] + "<br><br>");
  };
}

askQuestions(questions, answers);
checkAnswers(questions, answers);
displayResults(correctAns, wrongAns);
