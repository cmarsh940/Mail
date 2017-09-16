import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  number = 3;
  users = [
    {
      email: 'Cam@cam.cam',
      importance: true,
      subject: 'Hello World',
      content: 'Welcom, come say Hello!!'
    },
    {
      email: 'jon@jon.com',
      importance: true,
      subject: 'My name is Jon',
      content: 'Welcome to my party.'
    },
    {
      email: 'Betty@gmail.cam',
      importance: false,
      subject: 'This is a test',
      content: 'This better work,,,,,!!!!!'
    }
  ];
}
