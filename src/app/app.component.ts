import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { ServerComponent } from './server/server.component';
//import { LoginComponent } from './login/login.component';
//import { SearchComponent } from './search/search.component';
//import { ErrorComponent } from './error/error.component';
//import { Routes, RouterModule } from '@angular/router';
//import { RouterOutlet } from '@angular/router';
//import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [ FormsModule, CommonModule, ServerComponent, LoginComponent, ErrorComponent, HomeComponent, SearchComponent,RouterModule, RouterOutlet ],
  imports:[ FormsModule, CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ngApp';
  counter="hi";
  changeCounter(){ this.counter="hello" }

  y=10;
  changeY(){ this.y = this.y + 10 }

  i=0;
  data:any;

  constructor(  ){ }

  ngOnInit(){
     // setTimeout( ()=>{ this.counter = this.counter + 1 }, 2000 );
      //setInterval( ()=>{ this.counter = this.counter + 1}, 2000 );

      this.i=2;
      this.data=new BehaviorSubject(this.i);
  }

  double(){
    this.i=this.i + this.i;
    this.data.next(this.i );
  }
 
}