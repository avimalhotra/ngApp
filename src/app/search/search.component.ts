import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchItem: any="";

  constructor(private route:ActivatedRoute){ }

  ngOnInit(){
    this.route.queryParams.subscribe( (x)=>{
      this.searchItem=x;      
    } )
  }

}
