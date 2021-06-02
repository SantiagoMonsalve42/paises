import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises-interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  
  pais!: Country;

  constructor(
    private rutaActiva: ActivatedRoute, 
    private servicio: PaisService
    ) { }

  ngOnInit(): void {

    //USANDO RXJS
    this.rutaActiva.params
    .pipe(
      switchMap( ({id}) =>{
         return this.servicio.buscarPaisPorAlpha( id)
      } ),
      tap(console.log)
    )
    .subscribe( pais => {
      this.pais=pais;
    })
    /* FORMA LARGA DE HACERLO, FORMA CLASICA
    this.rutaActiva.params.
    subscribe( params =>{
      this.servicio.buscarPaisPorAlpha(params.id)
        .subscribe(pais => {
          console.log(pais);
        })

    });
    */

  }

}
