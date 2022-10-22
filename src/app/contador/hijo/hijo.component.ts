import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  @Input() contador: number = 0;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() {}

  multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador: any) {
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }
}
