import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule /* ServerComponent */ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngApp';
  name="";
  //updateName(x:Event){this.name=(x.target as HTMLInputElement).value}
  range=0;
  chk=false;
  gen="";
  city="";
  hybrid=true;
  num=0;
}