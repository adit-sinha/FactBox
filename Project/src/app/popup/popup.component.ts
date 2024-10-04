import { Component, Input, OnInit } from '@angular/core';

import { TriviaService } from '../trivia.service';
//not used yet, will implement questions later

import { HttpClientModule } from '@angular/common/http';

//import { P_MODALS } from '../portfolio-models';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) img!: string;
  @Input({required: true}) text!: string
  @Input({required: true}) title!: string;
  questions: any[] = [];

  //constructor to utilize triviaService
  

}
