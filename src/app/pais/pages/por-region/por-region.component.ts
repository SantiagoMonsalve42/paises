import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 7px;
    }
    `
  ]
})
export class PorRegionComponent {
 
  termino: string ="";
  hayError: boolean=false;
  listaPaises: Country[]=[];
  regiones: string[]= ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string ="";
  
  //inyeccion de dependencia servise
  constructor(private paisService: PaisService){}

  activarRegion(region : string){
    if(region === this.regionActiva){ return; }
      this.regionActiva = region;
      this.buscar(this.regionActiva);
      //TODO LLAMAR AL SERVICIO
  }

  getClassCss(region: string): string{
    return (region === this.regionActiva) 
    ? 'btn btn-primary' 
    : 'btn btn-outline-primary'
  }

  buscar(termino: string): void{

    this.hayError = false;
    this.termino=termino;
    
    this.paisService.buscarPaisPorRegion(this.termino)
      .subscribe((paises) => {
        this.listaPaises=paises;
      },(error) => {
        this.hayError = true;
        this.listaPaises = [];
      })
  }
  
}
