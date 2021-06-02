import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string= 'https://restcountries.eu/rest/v2';
  
  constructor(private http: HttpClient) {  }

  buscarPais(termino: string): Observable <Country[]>{
    const url=this.url+"/name/"+termino;
    return this.http.get<Country[]>(url);
  }

  buscarPorCapital(termino: string): Observable <Country[]>{
    const url=this.url+"/capital/"+termino;
    return this.http.get<Country[]>(url);
  }
  buscarPaisPorAlpha(termino: string): Observable <Country>{
    const url=this.url+"/alpha/"+termino;
    return this.http.get<Country>(url);
  }
}
