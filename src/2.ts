
```typescript
// Math Quiz App
const mathQuiz = {
  questions: [
    {
      question: "What is the value of x in the equation 2x + 5 = 11?",
      answers: [
        { text: "0", correct: false },
        { text: "1", correct: true },
        { text: "-1", correct: false },
        { text: "2", correct: false }
      ]
    },
    {
      question: "What is the value of y in the equation 3y - 2 = 10?",
      answers: [
        { text: "0", correct: false },
        { text: "1", correct: true },
        { text: "-1", correct: false },
        { text: "2", correct: false }
      ]
    },
    {
      question: "What is the value of z in the equation 5z = 25?",
      answers: [
        { text: "0", correct: false },
        { text: "1", correct: true },
        { text: "-1", correct: false },
        { text: "2", correct: false }
      ]
    }
  ],
  currentQuestionIndex: 0,
  score: 0
};
```