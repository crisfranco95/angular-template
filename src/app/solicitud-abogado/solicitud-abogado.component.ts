import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app-services.service';
import { SolicitudAbogadoModel } from '../model/SolicitudAbogadoModel';

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
  selector: 'app-solicitud-abogado',
  templateUrl: './solicitud-abogado.component.html',
  styleUrls: ['./solicitud-abogado.component.css']
})
export class SolicitudAbogadoComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'nombre', 'asunto', 'firma'];
  dataSource: SolicitudAbogadoModel | null;

  public pageIndex = 0;
  public pageSize  = 5;
  public length: number;

  registerUserForm = new FormGroup({
    No_de_Oficio_EXT: new FormControl(''),
    Nombre: new FormControl(''),
    Asunto: new FormControl(''),
    Firma_de_Abogado_Solicitante: new FormControl('')

  });
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.list({pageIndex: this.pageIndex, pageSize: this.pageSize});
    
  }

  list(event) {
    const {pageIndex = 0, pageSize = 5} = event;

    this.appService.getSolicitudAbogado(pageIndex + 1, pageSize).subscribe(res => {
      const solicitudAbogado = res.message.docs;
      this.dataSource = solicitudAbogado;
      this.length = res.message.total;

    }, err => {

      console.log(err);

      });
  }


  save() {

    let solicitudAbogadoModel: SolicitudAbogadoModel  = {
      No_de_Oficio_EXT: this.registerUserForm.value.No_de_Oficio_EXT,
      Nombre: this.registerUserForm.value.Nombre,
      Asunto: this.registerUserForm.value.Asunto,
      Firma_de_Abogado_Solicitante: this.registerUserForm.value.Firma_de_Abogado_Solicitante,

    };

    this.appService.guardarSolicitudAbogado(solicitudAbogadoModel).subscribe(
        response => {
          alert('Resolución de convenio de pago ha sido creada exitosamente');
        },
        error => {
          alert(error.message.message);

        }); 
  }
}
