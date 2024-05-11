import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';

@Component({
   selector: 'app-root',
  // selector: '[app-root]',
  //  selector: '.container',
  //selector: '#app',
  standalone: true,
  imports: [RouterOutlet, ServerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //template:`<h1>This is {{title}}</h1>`,
  //styles:['h1{ color:red }']
})
export class AppComponent {
  title = 'ngApp';
  date= new Date().toLocaleString();
}