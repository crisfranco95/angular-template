import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MandamientoPagoModel } from './model/MandamientoPagoModel';
import { MandamientoModel } from './model/MandamientoModel';
import { SolicitudAbogadoModel } from './model/SolicitudAbogadoModel';
import { ResolucionVigenteModel } from './model/ResolucionVigenteModel';
import { ResolucionConvenioPagoModel } from './model/ResolucionConvenioPagoModel';
import { NotificacionEmbargoModel } from './model/NotificacionEmbargoModel';
import { NotificacionCorrespondenciaModel } from './model/NotificacionCorrespondenciaModel';
import { NotificacionMensajeriaModel } from './model/NotificacionMensajeriaModel';
import { ArchivoDeterminadoModel } from './model/ArchivoDeterminadoModel';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;

  }
  apiUrl: string;

  guardarMandamiento(mandamiento: MandamientoModel): Observable<any> {

    const params = JSON.stringify(mandamiento);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/Mandamientos', params, { headers: headers });

  }

  guardarMandamientoPago(mandamientoPago: MandamientoPagoModel): Observable<any> {

    const params = JSON.stringify(mandamientoPago);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/MandamientosPago', params, { headers: headers });

  }

  guardarSolicitudAbogado(solicitudAbogado: SolicitudAbogadoModel): Observable<any> {

    const params = JSON.stringify(solicitudAbogado);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/Solicitud_Abo', params, { headers: headers });

  }
  guardarResolucionVigente(resolucionVigente: ResolucionVigenteModel): Observable<any> {

    const params = JSON.stringify(resolucionVigente);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/Resoluciones_Vigen', params, { headers: headers });

  }

  guardarResolucionConvenioPago(resolucionConvenioPago: ResolucionConvenioPagoModel): Observable<any> {

    const params = JSON.stringify(resolucionConvenioPago);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/Resoluciones_Conve_Pag', params, { headers: headers });

  }

  guardarNotificacionMensajeria(notificacionMensajeria: NotificacionMensajeriaModel): Observable<any> {

    const params = JSON.stringify(notificacionMensajeria);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/notificacion_mensajeria', params, { headers: headers });

  }

  guardarNotificacionEmbargo(notificacionEmbargo: NotificacionEmbargoModel): Observable<any> {

    const params = JSON.stringify(notificacionEmbargo);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/Notificacion_Emba', params, { headers: headers });

  }

  guardarNotificacionCorrespondencia(notificacionCorrespondencia: NotificacionCorrespondenciaModel): Observable<any> {

    const params = JSON.stringify(notificacionCorrespondencia);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/NotificacionCorrespondencia', params, { headers: headers });

  }

  guardarArchivoDeterminado(archivoDeterminado: ArchivoDeterminadoModel): Observable<any> {

    const params = JSON.stringify(archivoDeterminado);
    const jwt = localStorage.getItem('JWT');

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('x-access-token', jwt);

    return this.http.post(this.apiUrl + 'api/v1/Respuesta_Archi_Deter', params, { headers: headers });

  }

  getMandamientos(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/Mandamientos?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }

  getMandamientosPago(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/MandamientosPago?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }


  getSolicitudAbogado(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/Solicitud_Abo?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }


  getResolucionVigente(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/Resoluciones_Vigen?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }


  getResolucionConvenioPago(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/Resoluciones_Conve_Pag?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }


  getNotificacionMensajeria(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/notificacion_mensajeria?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }


  getNotificacionEmbargo(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/Notificacion_Emba?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }


  getNotificacionCorrespondencia(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/NotificacionCorrespondencia?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }


  getArchivoDeterminado(page: number, limit: number): Observable<any> {
    const jwt = localStorage.getItem('JWT');
    const headers = new HttpHeaders().set('x-access-token', jwt);
    return this.http.get<any>(this.apiUrl + 'api/v1/Respuesta_Archi_Deter?page=' + page + '&limit=' + limit,
    {
      headers
    });
  }

}
