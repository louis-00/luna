import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bazar-card',
  templateUrl: './bazar-card.component.html',
  styleUrls: ['./bazar-card.component.css']
})
export class BazarCardComponent implements OnInit {

 @Input() bazar:any = {};
 @Input() index:number;

 @Output() bazarSeleccionado:EventEmitter<number>;

  constructor(private router:Router) { 
    this.bazarSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verBazar(){
    //console.log(this.index);
    this.router.navigate(['/bazar', this.index])
    //.bazarSeleccionado.emit(this.index)
  }

}
