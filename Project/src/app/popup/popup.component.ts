import { Component, DestroyRef, inject, Input, OnInit, signal } from '@angular/core';
//import { Modal } from 'bootstrap';
import { HttpClient } from '@angular/common/http';
import { Fact } from './facts-model';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {
  @Input({required: true}) id!: string;
  @Input({required: true}) img!: string;
  @Input({required: true}) text!: string[];
  @Input({required: true}) title!: string;
  
  selectedText!:string;
  //modalElem: HTMLElement | null = null;

  facts = signal<Fact[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(){
    //this.modalElem = document.getElementById('portfolioModal' + this.id);
    const subscription = this.httpClient
    .get<{facts: Fact[]}>('http://localhost:3000/facts')
    .subscribe({
      next: (resData) => {
        this.facts.set(resData.facts);
      }
    });

    this.destroyRef.onDestroy( () => {
      subscription.unsubscribe();
    });
    this.selectRandom();
  }

  selectRandom() {
    
    if (this.text?.length) {
      let newFact;
      do {
        newFact = this.text[Math.floor(Math.random() * this.text.length)];
      } while (newFact === this.selectedText);

      this.selectedText = newFact;
    }
    //const modal = new Modal(this.modalElem);
    //modal.show();
  }

  


}
