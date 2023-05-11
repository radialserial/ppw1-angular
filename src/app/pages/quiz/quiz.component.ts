import { Component } from '@angular/core';
import { Question } from 'src/app/util/question';
import { QUESTIONS } from 'src/app/util/questions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  currentQuestion: number = 0;
  score: number = 0;

  questions: Question[] = QUESTIONS;

  nextQuestion(answerId: string) {
    if (answerId === this.questions[this.currentQuestion].correct) {
      this.score++;
    }
    this.currentQuestion++;
  }

}
