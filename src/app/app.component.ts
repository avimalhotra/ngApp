import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule , CommonModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngApp';

  name="Avi";
  //email = new FormControl('');
  //age = new FormControl('');

  loginForm=new FormGroup({
      email:new FormControl(`${this.name}`),
      age:new FormControl(""),
      pass:new FormControl(""),
  });

  submitForm(){
    console.log(this.loginForm.value);
    console.log("form submitted");
  }




}