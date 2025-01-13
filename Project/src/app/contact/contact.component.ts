import { Component } from '@angular/core';
import { EmailService } from "./contact.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  to: string = '';
  name: string = '';
  text: string = '';

  constructor(private emailService: EmailService) {}

  sendEmail() {
    this.emailService.sendEmail(this.to, this.name, this.text).subscribe(
      response => {
        console.log('Email sent successfully:', response);
      },
      error => {
        console.error('Error sending email:', error);
      }
    );
  }
}
