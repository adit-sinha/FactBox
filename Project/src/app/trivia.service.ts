import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TriviaService {
  private apiUrl = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';

  constructor(private http: HttpClient) {}

  getTriviaQuestions(): Observable<any> {
    //returns data from API
    return this.http.get<any>(this.apiUrl);
  }

}
