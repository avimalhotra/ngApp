import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})

export class ServerComponent {
  
  counter=0;
  @Input() y:string="";  
  @Output() incVal=new EventEmitter<number>();

  changeValue(){
    this.counter=this.counter+1;
    this.incVal.emit(this.counter);
  }

}
