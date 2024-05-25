import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ServerComponent } from './server/server.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule , CommonModule, CustomPipe /* ServerComponent */ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngApp';
  name="";
  //updateName(x:Event){this.name=(x.target as HTMLInputElement).value}
  range=0;
  chk=true;
  gen="";
  city="";
  hybrid=true;
  num=0;
  cars=["swift","alto","baleno"];
  car={name:"swift", power:82};
  data=[
    {"name": "swift", "type": "hatchback", "price":810000},
    {"name": "swift", "type": "hatchback", "price":810000},
    {"name": "dzire", "type": "hatchback", "price":880000},
    {"name": "ciaz", "type": "sedan", "price":1000000},
    {"name": "baleno", "type": "hatchback", "price":850000},
    {"name": "brezza", "type": "suv", "price":1400000},
    {"name": "fronx", "type": "hatchback", "price":1000000},
    {"name": "jimny", "type": "suv", "price":1300000}
  ];
  str="lorem ipsum";
  day=1;
  days=["sunday","monday","tuesday"];
  css={'color':'red','text-align':'center'};
  

}