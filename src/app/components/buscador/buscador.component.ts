import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BazaresService } from '../../services/bazares.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  bazares:any[] = []
  texto:string;

  constructor(private ActivatedRoute:ActivatedRoute,
              private _bazaresService:BazaresService,
              private router:Router) {

   }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params =>{
      this.texto = (params['texto']);
      this.bazares = this._bazaresService.buscarBazar(params['texto'])
      console.log(this.bazares);
      
    });
  }
  verBazar(idx:number){
  
    this.router.navigate(['/bazar',idx])
    
  }

}
