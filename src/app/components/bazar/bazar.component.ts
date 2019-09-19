import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BazaresService } from '../../services/bazares.service';


@Component({
  selector: 'app-bazar',
  templateUrl: './bazar.component.html',
  styleUrls: ['./bazar.component.css']
})
export class BazarComponent {

  bazar:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _bazaresService: BazaresService
    ) { 
   
    this.activatedRoute.params.subscribe( params =>{
      this.bazar = this._bazaresService.getBazar(params['id'])
    })

  }

}
