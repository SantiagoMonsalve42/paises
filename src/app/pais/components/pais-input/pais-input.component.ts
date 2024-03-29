import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{
 

  termino: string= "";
  @Input()
  placeholder: string= "";
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //subject cumple funcion de observable
  debouncer: Subject <string> = new Subject();


  ngOnInit(): void {
    
    this.debouncer
      .pipe( debounceTime(300) )
      .subscribe( valor =>{
      this.onDebounce.emit(valor);
    })
  }


  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(){
      this.debouncer.next(this.termino);

  }
  
 

}
