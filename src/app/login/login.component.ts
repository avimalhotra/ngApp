import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  x:any;

  constructor( private route:ActivatedRoute ){ }

  ngOnInit(){
      this.route.params.subscribe( (p)=>{
          
          this.x=p['id'];
          //this.x=this.route.snapshot.params['id'];
          console.log( this.x );
      })
  }

}
