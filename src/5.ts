MathQuiz() {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10 + 1);

  // Print the question to the console
  console.log(`What is ${randomNumber} x ${randomNumber}?`);

  // Get the user's answer
  const answer = prompt("Enter your answer: ");

  // Validate the answer
  if (parseInt(answer) === randomNumber * randomNumber) {
    console.log(`Correct! The answer is ${randomNumber * randomNumber}`);
  } else {
    console.log(`Incorrect. The correct answer is ${randomNumber * randomNumber}`);
  }
}
