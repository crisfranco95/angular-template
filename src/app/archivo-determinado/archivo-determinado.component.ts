import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app-services.service';
import { ArchivoDeterminadoModel } from '../model/ArchivoDeterminadoModel';

@Component({
  selector: 'app-archivo-determinado',
  templateUrl: './archivo-determinado.component.html',
  styleUrls: ['./archivo-determinado.component.css']
})
export class ArchivoDeterminadoComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'nombre', 'asunto', 'firma'];
  dataSource: ArchivoDeterminadoModel | null;

  public length: number;
  public pageIndex = 0;
  public pageSize  = 5;

  registerUserForm = new FormGroup({
    No_de_Oficio_EXT: new FormControl(''),
    Nombre: new FormControl(''),
    Asunto: new FormControl(''),
    Firma_del_Responsable: new FormControl(''),
    
  });
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.list({pageIndex: this.pageIndex, pageSize: this.pageSize});
  }

  list(event) {
    const {pageIndex = 0, pageSize = 5} = event;

    this.appService.getArchivoDeterminado(pageIndex + 1, pageSize ).subscribe(res => {
      const archivos = res.message.docs;
      this.dataSource = archivos;
      this.length = res.message.total;
    }, err => {
      console.log(err);
      });
  }

  save() {

    let archivoDeterminadoModel: ArchivoDeterminadoModel  = {
      No_de_Oficio_EXT: this.registerUserForm.value.No_de_Oficio_EXT,
      Nombre: this.registerUserForm.value.Nombre,
      Asunto: this.registerUserForm.value.Asunto,
      Firma_del_Responsable: this.registerUserForm.value.Firma_del_Responsable,
    };

    this.appService.guardarArchivoDeterminado(archivoDeterminadoModel).subscribe(
        response => {
          alert('El archivo determinado ha sido creado exitosamente');
        },
        error => {
          alert(error.message.message);

        }); 
  }

}
