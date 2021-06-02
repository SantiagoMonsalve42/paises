import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent{
 
  termino: string ="";
  hayError: boolean=false;
  listaPaises: Country[]=[];
  
  //inyeccion de dependencia servise
  constructor(private paisService: PaisService){}

  buscar(termino: string): void{

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
    //TODO crear sugerencias
  }
}
