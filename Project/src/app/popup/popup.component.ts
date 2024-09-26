import { Component, Input } from '@angular/core';

import { P_MODALS } from '../portfolio-models';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) img!: string;
  @Input({required: true}) text!: string
  @Input({required: true}) title!: string;

}
