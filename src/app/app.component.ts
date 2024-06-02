import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validator, FormBuilder } from '@angular/forms';
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

  //email = new FormControl('');
  //age = new FormControl('');

  /* loginForm=new FormGroup({
      email:new FormControl("",[Validators.required, Validators.pattern(/[\w]{1,}\@[\w]{1,}\.[\w]{2,}/)]),
      age:new FormControl("",[Validators.required,Validators.min(18),Validators.max(25)]),
      pass:new FormControl("",[Validators.required,Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,12})/)]),
  }); */

  constructor(private fb:FormBuilder){ }

  loginForm:FormGroup=this.fb.group({
    email:new FormControl("",[Validators.required, Validators.pattern(/[\w]{1,}\@[\w]{1,}\.[\w]{2,}/)]),
    age:new FormControl("",[Validators.required,Validators.min(18),Validators.max(25)]),
    pass:new FormControl("",[Validators.required,Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,12})/)]),
  });


  patchVal(){this.loginForm.patchValue({email:"user@domian.com"}) }
  setVal(){this.loginForm.setValue({email:"user@domian.com",age:0, pass:'00000000'}) }


  submitForm(){
    console.log(this.loginForm.value);
    console.log("form submitted");
  }




}