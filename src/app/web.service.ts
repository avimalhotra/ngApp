import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor( private http: HttpClient ){ }

  getProducts(){ return this.http.get('https://fakestoreapi.com/products') }

  getProduct(id:number){ return this.http.get(`https://fakestoreapi.com/products/${id}`) }

  getPincode(x:any){
    const url=`https://api.postalpincode.in/pincode/${x}`;
    return this.http.get(`${url}`);
  }


  getCars(){return this.http.get('./assets/data.json')}


  postData(){
    return this.http.post('/post',{name:"avi"},{}).subscribe(i=>{ console.log(i) })
  }
  
  
}
