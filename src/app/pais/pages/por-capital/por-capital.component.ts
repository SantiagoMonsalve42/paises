import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles:[
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorCapitalComponent {

  termino: string ="";
  hayError: boolean=false;
  listaPaises: Country[]=[];
  mostrarSugerencias: boolean= false;
  listaPaisesSugerencias:Country[]=[];
  //inyeccion de dependencia servise
  constructor(private paisService: PaisService){}

  buscar(termino: string): void{

    this.hayError = false;
    this.termino=termino;
    
    this.paisService.buscarPorCapital(this.termino)
      .subscribe((paises) => {
        this.listaPaises=paises;
      },(error) => {
        this.hayError = true;
        this.listaPaises = [];
      })
  }
  
  sugerencias(termino: string):void{
    this.hayError=false;
    this.termino= termino;
    this.mostrarSugerencias=true;
    this.paisService.buscarPorCapital(termino)
    .subscribe((paises) => {
      this.listaPaisesSugerencias=paises.splice(0,5);
    },(error) => {
      this.listaPaisesSugerencias=[];
    })
  }
}
