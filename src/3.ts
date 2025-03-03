export class MathQuiz {
  private questions: Question[] = [];

  constructor() {}

  async init() {
    const response = await fetch("https://api.example.com/questions");
    this.questions = await response.json();
  }

  getRandomQuestion(): Question | undefined {
    if (this.questions.length === 0) return;
    const index = Math.floor(Math.random() * this.questions.length);
    return this.questions[index];
  }
}
