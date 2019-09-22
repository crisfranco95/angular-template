import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MandamientoPagoModel } from './model/MandamientoPagoModel';
import { MandamientoModel } from './model/MandamientoModel';
import { SolicitudPagoModel } from './model/SolicitudPagoModel';
import { ResolucionVigenteModel } from './model/ResolucionVigenteModel';
import { ResolucionConvenioPagoModel } from './model/ResolucionConvenioPagoModel';
import { NotificacionEmbargoModel } from './model/NotificacionEmbargoModel';
import { NotificacionCorrespondenciaModel } from './model/NotificacionCorrespondenciaModel';
import { NotificacionMensajeriaModel } from './model/NotificacionMensajeriaModel';
import { ArchivoDeterminadoModel } from './model/ArchivoDeterminadoModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
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

  guardarSolicitudPago(solicitudPago: SolicitudPagoModel): Observable<any> {

    const params = JSON.stringify(solicitudPago);
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


}
