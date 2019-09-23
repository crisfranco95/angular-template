import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app-services.service';
import { NotificacionCorrespondenciaModel } from '../model/NotificacionCorrespondenciaModel';

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
  displayedColumns: string[] = ['ciudad', 'nombre', 'referencia', 'propietario'];
  dataSource: NotificacionCorrespondenciaModel | null;

  public  pageIndex = 0;
  public  pageSize  = 5;
  public length: number;

  constructor(
    private appService: AppService
  ) { }

  registerUserForm = new FormGroup({
    Ciudad: new FormControl(''),
    Nombre: new FormControl(''),
    Referencia_Catas: new FormControl(''),
    Direccion: new FormControl(''),
    Propietario: new FormControl('')
  
  });

  ngOnInit() {
    this.list({pageIndex: this.pageIndex, pageSize: this.pageSize});
  }

  list(event) {
    const {pageIndex = 0, pageSize = 5} = event;

    this.appService.getNotificacionCorrespondencia(pageIndex + 1, pageSize ).subscribe(res => {
      const notificacionCorrespondencia = res.message.docs;
      this.dataSource = notificacionCorrespondencia;
      this.length = res.message.total;

    }, err => {

      console.log(err);

      });
  }

  save() {

    let notificacionCorrespondenciaModel: NotificacionCorrespondenciaModel  = {
      Ciudad: this.registerUserForm.value.Ciudad,
      Nombre: this.registerUserForm.value.Nombre,
      Referencia_Catas: this.registerUserForm.value.Referencia_Catas,
      Direccion: this.registerUserForm.value.Direccion,
      Propietario: this.registerUserForm.value.Propietario,
    };

    this.appService.guardarNotificacionCorrespondencia(notificacionCorrespondenciaModel).subscribe(
        response => {
          alert('El usuario ha sido creado exitosamente');
        },
        error => {
          alert(error.message.message);

        }); 
 }

}
