import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor( private http: HttpClient ){ }

  getProducts(){ return this.http.get('https://fakestoreapi.com/products') }

  getProduct(){ return this.http.get('https://fakestoreapi.com/products/1') }
  
}
