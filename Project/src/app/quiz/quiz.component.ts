import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

import { P_MODALS } from '../../../backend/portfolio-models';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  list = P_MODALS;

}
