import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '123456', weight: 1.0079, symbol: 'Cartagena'},
  {position: 2, name: '123456', weight: 4.0026, symbol: 'Cartagena'},
  {position: 3, name: '123456', weight: 6.941, symbol: 'Barranquilla'},
  {position: 4, name: '123456', weight: 9.0122, symbol: 'Santa Marta'},
  {position: 5, name: '123456', weight: 10.811, symbol: 'Medellín'},
  {position: 6, name: '123456', weight: 12.0107, symbol: 'Cali'},
  {position: 7, name: '123456', weight: 14.0067, symbol: 'Cúcuta'},
  {position: 8, name: '123456', weight: 15.9994, symbol: 'Bucaramanga'},
  {position: 9, name: '123456', weight: 18.9984, symbol: 'Manizales'},
  {position: 10, name: '123456', weight: 20.1797, symbol: 'Cartagena'},
];

@Component({
  selector: 'app-notificacion-correspondencia',
  templateUrl: './notificacion-correspondencia.component.html',
  styleUrls: ['./notificacion-correspondencia.component.css']
})
export class NotificacionCorrespondenciaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }


  registerUserForm = new FormGroup({
    numero: new FormControl(''),
    ciudad: new FormControl(''),
    expediente: new FormControl(''),
    referenciaC: new FormControl(''),
    direccion: new FormControl(''),
    notificacion: new FormControl(''),
    propietario: new FormControl(''),
    resolucion: new FormControl(''),
    valor: new FormControl(''),

  });

  ngOnInit() {
  }

}