import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { LoginUserModel } from '../model/LoginUserModel';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginUserModel = {
    Username: '',
    Password: ''
  };

  public showLoadingBar: boolean;

  loginForm = new UntypedFormGroup({
    usernameField: new UntypedFormControl(''),
    passwordField: new UntypedFormControl('')
  });

  constructor(private authService: AuthService,
    private router: Router

    ) { }

  ngOnInit() {
  }
  

  save(): void {
    this.showLoadingBar = true;
    // this.authService.authenticate(this.user).subscribe(res => {

    //   this.showLoadingBar = false;

      this.router.navigate(['dashboard']);


      // }, err => {
      //   this.showLoadingBar = false;

      //   alert('El usuario no se ha logueado correctamente');

      // });
  }

}
