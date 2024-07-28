import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { CardComponent } from './card/card.component';
//import { HomeComponent } from './home/home.component';
//import { ChangeDetectionStrategy } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';
// import { ServerComponent } from './server/server.component';
//import { ErrorComponent } from "./error/error.component";
//import { SearchComponent } from "./search/search.component";
//import { LoginComponent } from './login/login.component';
//import { SearchComponent } from './search/search.component';
//import { ErrorComponent } from './error/error.component';
//import { Routes, RouterModule } from '@angular/router';
//import { RouterOutlet } from '@angular/router';
//import { RouterLink, RouterLinkActive } from '@angular/router';
// import { AppService } from './app.service';
// import { ErrorService } from './error.service';
// import { TestErrorService } from './test-error.service';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[WebService]
})
export class AppComponent{
  
    title = 'ngApp';

    x=3;
    
    res:any=[];

    constructor(private http:WebService){}

    ngOnInit(){
      this.http.getCars().subscribe(i=>{
        this.res=i;
      });

      
    }
  

}