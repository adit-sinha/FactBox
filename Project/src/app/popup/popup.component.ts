import { AfterViewInit, Component, DestroyRef, inject, Input, OnInit, signal } from '@angular/core';
import { Modal } from 'bootstrap';
import { HttpClient } from '@angular/common/http';
import { Fact } from './facts-model';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit{
  @Input({required: true}) id!: string;
  @Input({required: true}) img!: string;
  @Input({required: true}) text!: string[];
  @Input({required: true}) title!: string;
  
  selectedText!:string;

  facts = signal<Fact[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(){
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
    //JQuery so wont work: $("portfolioModal${this.id}").modal('show');
  }  


}
