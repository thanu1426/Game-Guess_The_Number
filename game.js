const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
const $inputId = document.getElementById("number-input");

var guessNumber = Math.round(Math.random() * 100);
var lives = 10;
var message;

$submitButton.onclick = () => {
    let userInput = $inputId.value;
    console.log(userInput);
    lives--;
    if (userInput == guessNumber)
        location.href = "./win.html";
    else if (lives == 0)
        location.href = "./lose.html";
    else if (userInput > guessNumber) {
        if (userInput - guessNumber <= 10)
            message = `OOPS 😐! Your Guess is SLIGHTLY HIGH.<br> You have ${lives} lives remaining.`;
        else
            message = `OOPS 😐! Your Guess is TOO HIGH.<br> You have ${lives} lives remaining.`;
    } else {
        if (guessNumber - userInput <= 10)
            message = `OOPS 😐! Your Guess is SLIGHTLY LOW.<br> You have ${lives} lives remaining.`;
        else
            message = `OOPS 😐! Your Guess is TOO LOW.<br> You have ${lives} lives remaining.`;
    }
    $inputId.value = null;
    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;
}