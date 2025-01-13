import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:5000/api/send-email'; // Update to Flask server URL

  constructor(private http: HttpClient) {}

  sendEmail(to: string, name: string, text: string): Observable<any> {
    const emailData = { to, name, text };
    return this.http.post(this.apiUrl, emailData);
  }
}