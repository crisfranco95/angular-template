import { Injectable } from '@angular/core';
import { Router,  CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
     // propiedades privadas del Router, son objeto tipo router

     private _router: Router,

  ) { }

  canActivate() {
    // const token = localStorage.getItem('JWT');

    // if (token) {
    //     return true;
    // } else {
        // this._router.navigate(['/login']);
        return true;
    // }

  }
}
