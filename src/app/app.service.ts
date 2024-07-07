import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getData(){ return "data from app service" }
  getArea(x:number,y:number){ return x*y }

}
