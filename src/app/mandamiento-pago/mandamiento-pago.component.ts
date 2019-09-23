import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MandamientoPagoModel } from '../model/MandamientoPagoModel';
import { AppService } from '../app-services.service';



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
  selector: 'app-mandamiento-pago',
  templateUrl: './mandamiento-pago.component.html',
  styleUrls: ['./mandamiento-pago.component.css']
})

export class MandamientoPagoComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['numero', 'expediente', 'referencia', 'ciudad'];
  // dataSource = ELEMENT_DATA;
  dataSource: MandamientoPagoModel | null;
  public  pageIndex = 0;
  public  pageSize  = 5;
  public length: number;

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


  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.list({pageIndex: this.pageIndex, pageSize: this.pageSize});
  }

  list(event) {
    const {pageIndex = 0, pageSize = 5} = event;

    this.appService.getMandamientosPago(pageIndex + 1, pageSize ).subscribe(res => {
      const mandamientosPago = res.message.docs;
      this.dataSource = mandamientosPago;
      this.length = res.message.total;

    }, err => {

      console.log(err);

      });
  }

  save() {

    let mandamientoPagoModel: MandamientoPagoModel  = {
      Mandamiento_de_pago_No: this.registerUserForm.value.numero,
      Ciudad: this.registerUserForm.value.ciudad,
      Expediente: this.registerUserForm.value.expediente,
      ReferenciaC: this.registerUserForm.value.referenciaC,
      Direccion: this.registerUserForm.value.direccion,
      Notificacion: this.registerUserForm.value.notificacion,
      Propietario: this.registerUserForm.value.propietario,
      Resolucion: this.registerUserForm.value.resolucion,
      Valor: this.registerUserForm.value.valor,
    };

    this.appService.guardarMandamientoPago(mandamientoPagoModel).subscribe(
        response => {
          alert('El usuario ha sido creado exitosamente');
        },
        error => {
          alert(error.message.message);

        }); 
 }

}
