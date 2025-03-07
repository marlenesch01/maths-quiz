import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-maths-quiz',
  templateUrl: './maths-quiz.component.html',
  styleUrls: ['./maths-quiz.component.css']
})
export class MathsQuizComponent {

  questions: any[];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.quizService.getAll().subscribe((data: any[]) => {
      this.questions = data;
    });
  }
}
