import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HomeComponent } from './home/home.component';
//import { ChangeDetectionStrategy } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';
//import { ServerComponent } from './server/server.component';
//import { LoginComponent } from './login/login.component';
//import { SearchComponent } from './search/search.component';
//import { ErrorComponent } from './error/error.component';
//import { Routes, RouterModule } from '@angular/router';
//import { RouterOutlet } from '@angular/router';
//import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppService } from './app.service';
import { ErrorService } from './error.service';
import { TestErrorService } from './test-error.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers:[AppService],
  //providers:[{ provide:AppService, useClass:AppService}],

  //providers:[{ provide:AppService, useClass:ErrorService}],
  //providers:[{ provide:AppService, useExisting:ErrorService}],
  //providers:[{ provide:AppService, useValue: {a:"aa", b:"bb"} }],
  providers:[{ provide:AppService, useFactory:()=>{
    let test=true;

    if(test){
      return new TestErrorService()
    }
    else{
      return new ErrorService();
    }

  }}],

})
export class AppComponent {
  title = 'ngApp';

  data:any;
  area:number=0;

  constructor( private service: AppService ){}

  ngOnInit(){
    //this.data=this.service.getData();
    //this.area=this.service.getArea(2,3);
    
    console.log( this.service );
    

  }


}