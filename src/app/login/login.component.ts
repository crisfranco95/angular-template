import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  loginForm = new FormGroup({
    usernameField: new FormControl(''),
    passwordField: new FormControl('')
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

      this.router.navigate(['home/dashboard']);


      // }, err => {
      //   this.showLoadingBar = false;

      //   alert('El usuario no se ha logueado correctamente');

      // });
  }

}
