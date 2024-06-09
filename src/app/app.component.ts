import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import {  Validators } from '@angular/forms';
//mport { ReactiveFormsModule } from '@angular/forms';
//import { Validator, FormBuilder } from '@angular/forms';
//import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { ServerComponent } from './server/server.component';
//import { ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ServerComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'ngApp';

  message="hello child";
  
  x:number=0;
  
  showVal(count:number){
    this.x=count;    
  }

}