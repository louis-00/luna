import { Component, OnInit } from '@angular/core';
import { BazaresService, Bazar } from '../../services/bazares.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bazares',
  templateUrl: './bazares.component.html',
  styleUrls: ['./bazares.component.css']
})

export class BazaresComponent implements OnInit {

  bazares:Bazar[] = [];

  constructor(private _bazarService:BazaresService,
              private _router:Router
    ) {
    
  } 

  ngOnInit() {
  
    this.bazares = this._bazarService.getBazares();
    //console.log(this.bazares);
    
  }

  verBazar(idx:number){
  
    this._router.navigate(['/bazar',idx])
    
  }

}
