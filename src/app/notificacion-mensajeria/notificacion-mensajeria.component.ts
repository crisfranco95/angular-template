import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app-services.service';
import { NotificacionMensajeriaModel } from '../model/NotificacionMensajeriaModel';

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
  selector: 'app-notificacion-mensajeria',
  templateUrl: './notificacion-mensajeria.component.html',
  styleUrls: ['./notificacion-mensajeria.component.css']
})
export class NotificacionMensajeriaComponent implements OnInit {
  displayedColumns: string[] = ['empresa', 'nombre', 'direccion', 'firma'];
  dataSource: NotificacionMensajeriaModel | null;

  public pageIndex = 0;
  public pageSize  = 5;
  public length: number;

  registerUserForm = new FormGroup({
    Empresa_mensajeria: new FormControl(''),
    Nombre: new FormControl(''),
    Direccion: new FormControl(''),
    Firma_recibido: new FormControl(''),
  });
  
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.list({pageIndex: this.pageIndex, pageSize: this.pageSize});
  }

  list(event) {
    const {pageIndex = 0, pageSize = 5} = event;

    this.appService.getNotificacionMensajeria(pageIndex + 1, pageSize).subscribe(res => {
      const notificacionMensajeriaModel = res.message.docs;
      this.dataSource = notificacionMensajeriaModel;
      this.length = res.message.total;

    }, err => {

      console.log(err);

      });
  }

  save() {

    let notificacionMensajeriaModel: NotificacionMensajeriaModel  = {
      Empresa_mensajeria: this.registerUserForm.value.Empresa_mensajeria,
      Nombre: this.registerUserForm.value.Nombre,
      Direccion: this.registerUserForm.value.Direccion,
      Firma_recibido: this.registerUserForm.value.Firma_recibido,
    };

    this.appService.guardarNotificacionMensajeria(notificacionMensajeriaModel).subscribe(
        response => {
          alert('La notificación de mensajería ha sido creada exitosamente');
        },
        error => {
          alert(error.message.message);

        }); 
  }

}
