
import { Math } from "mathjs";

function getRandomQuizQuestion() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = Math.floor(Math.random() * 4) + 1; // 1: addition, 2: subtraction, 3: multiplication, 4: division

  let question = "";
  let answer = 0;

  switch (operator) {
    case 1:
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 2:
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case 3:
      question = `${num1} x ${num2}`;
      answer = num1 * num2;
      break;
    case 4:
      question = `${num1} / ${num2}`;
      answer = Math.floor(num1 / num2);
      break;
  }

  return { question, answer };
}