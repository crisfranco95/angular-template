import { Injectable } from '@angular/core';
import { Router,  CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
     // propiedades privadas del Router, son objeto tipo router

     private _router: Router,

  ) { }

  canActivate() {
    // const token = localStorage.getItem('JWT');
    // if (token == null) {
    //   localStorage.removeItem('JWT');
    //   return true;
    // } else {
        // this._router.navigate(['/home/dashboard']);

      return true;
    // }
    // return true;
    // if (token == null) {
    //   return true;
    // }
    // return true;
    // if (token) {
    //     this._router.navigate(['/home/dashboard']);
    //     return false;
    // } else {
    //     // this._router.navigate(['/login']);
    //     return true;
    // }
  }
}
