import { Injectable } from '@angular/core';
import { LoginUserModel } from './model/LoginUserModel';
import { AuthModel } from './model/AuthModel';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public identity;
  public token;
  public url: string;

  constructor(private http: HttpClient) {
  }

  authenticate(user: LoginUserModel): Observable<AuthModel> {
    const apiUrl = environment.apiUrl;
    return this.http.post<AuthModel>(`${apiUrl}api/v1/auth/authenticate`, user)
    .pipe(
      tap((incomingUser: AuthModel) => {
        localStorage.setItem('JWT', incomingUser.token);
      }),
    );
  }


}
