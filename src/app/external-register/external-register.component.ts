import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-register',
  templateUrl: './external-register.component.html',
  styleUrls: ['./external-register.component.css']
})
export class ExternalRegisterComponent implements OnInit {


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
    private router: Router,
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['login']);

  }

}
