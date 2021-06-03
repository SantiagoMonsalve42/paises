import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent{
 
  termino: string ="";
  hayError: boolean=false;
  listaPaises: Country[]=[];
  listaPaisesSugerencias: Country[]=[];
  mostrarSugerencias: boolean = false;

  //inyeccion de dependencia servise
  constructor(private paisService: PaisService){}

  buscar(termino: string): void{

    this.mostrarSugerencias= false;
    this.hayError = false;
    this.termino=termino;
    
    this.paisService.buscarPais(this.termino)
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
    this.paisService.buscarPais(termino)
    .subscribe((paises) => {
      this.listaPaisesSugerencias=paises.splice(0,5);
    },(error) => {
      this.listaPaisesSugerencias=[];
    })

  }


}
