import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})

export class ServerComponent {
  
  //@Input({alias:'message'}) msg:any;
  @Input() msg:any;


}
