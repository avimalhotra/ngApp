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
// import { AppService } from './app.service';
// import { ErrorService } from './error.service';
// import { TestErrorService } from './test-error.service';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ WebService]

})
export class AppComponent {
  title = 'ngApp';

  data:any=[];

  product:any={};
  pid=0;
  err="";

  constructor( private res: WebService ){  }

  ngOnInit(){

  // this.res.getCars().subscribe(i=>console.log(i));

  //fetch("https://fakestoreapi.com/products").then(i=>i.json()).then(i=>console.table(i)).catch(e=>console.warn(e));

  //console.log( this.res.getProducts() );
    

  //this.res.getProducts().forEach(i=>{ console.log(i); })
  
  //this.res.getProducts().subscribe(i=>this.data.push(i));
  //this.data=this.data[0];  

  //this.res.getProduct(this.pid).subscribe(i=>{this.product=i})

    //this.res.postData();

  }

  // checkProduct(){
  //   this.res.getProduct(this.pid).subscribe(i=>{
  //     this.product=i;
  //     if( this.product==null ){ this.err="Invalid Id" }
  //     else{  this.err="Valid Id" }
  // });
  // };

  pin="";
  pinerr="";

  checkPincode(){
      this.res.getPincode(this.pin).subscribe(i=>{
        this.data=i;

        if( this.data[0].Status=="Error"){
          this.pinerr="No pincode found";
        }
        else{
          this.pinerr="Pincode found";
          this.data=this.data[0].PostOffice;
          //this.data=this.data.filter((i:any)=>i.Name.includes("a"));
          //this.data=this.data.sort((i:any,j:any)=>{if(i.District>j.District){ return 1 }else{ return -1}});
        }        

      });
  }






}