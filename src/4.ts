import { useState } from 'react';

const RandomMathQuestion = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const generateQuestion = () => {
    // Generate a random math question
    const operation = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setQuestion(`${num1} ${operation} ${num2}`);
    // Generate the answer
    let answer;
    switch (operation) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case 'x':
        answer = num1 * num2;
        break;
      case '/':
        answer = num1 / num2;
        break;
    }
    setAnswer(answer);
  };

  return (
    <div>
      <h1>{question}</h1>
      <form>
        <input type="text" value={answer} disabled />
      </form>
    </div>
  );
};
