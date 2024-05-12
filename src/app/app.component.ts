import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ServerComponent } from './server/server.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet /* ServerComponent */ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngApp';
  x=3;
  date= new Date().toLocaleString();
  cars=["swift","alto","brezza"];
  prices=[10,2,12,1,3,21];
  numSort=function(x:number,y:number){ return x-y };
  car={name:"swift", power:90, "on-road":1000000};
  toReverse=(x:string)=>{return x.split("").reverse().join("")};
  area=(x:number, y:number)=> { return x*y } ;
  src="assets/icon.png";
  dis=true;
  p="para";
  dark={"background":"#222","color":"#fff"};
  name="";
  sayHi(){ this.name="Hello" };
  sayBye(){ this.name="bye Bye" };
}