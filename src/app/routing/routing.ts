import { Routes, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guard/AuthGuard';
import { LoginGuard } from '../guard/LoginGuard';
import { HomeComponent } from '../home/home.component';
import { ExternalRegisterComponent } from '../external-register/external-register.component';
import { ForgottenPasswordComponent } from '../forgotten-password/forgotten-password.component';
import { HomeDashboardComponent } from '../home-dashboard/home-dashboard.component';
import { AboutComponent } from '../about/about.component';
import { SettingsComponent } from '../settings/settings.component';
import { MasterComponent } from '../master/master.component';
import { MandamientoComponent } from '../mandamiento/mandamiento.component';
import { MandamientoPagoComponent } from '../mandamiento-pago/mandamiento-pago.component';
import { NotificacionCorrespondenciaComponent } from '../notificacion-correspondencia/notificacion-correspondencia.component';
import { NotificacionEmbargoComponent } from '../notificacion-embargo/notificacion-embargo.component';
import { NotificacionMensajeriaComponent } from '../notificacion-mensajeria/notificacion-mensajeria.component';
import { ResolucionVigenteComponent } from '../resolucion-vigente/resolucion-vigente.component';
import { ResolucionConvenioPagoComponent } from '../resolucion-convenio-pago/resolucion-convenio-pago.component';
import { SolicitudAbogadoComponent } from '../solicitud-abogado/solicitud-abogado.component';
import { ArchivoDeterminadoComponent } from '../archivo-determinado/archivo-determinado.component';


// import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';

export const appRoutes: Routes = [
    {
        path: 'login',
        canActivate: [],
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [

                {
                    path: 'dashboard',
                    component: HomeDashboardComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'about',
                    component: AboutComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'mandamientos',
                    component: MandamientoComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'mandamientos-pago',
                    component: MandamientoPagoComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'notificacion-correspondencia',
                    component: NotificacionCorrespondenciaComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'notificacion-embargo',
                    component: NotificacionEmbargoComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'notificacion-mensajeria',
                    component: NotificacionMensajeriaComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'resolucion-vigente',
                    component: ResolucionVigenteComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'resolucion-convenio-pago',
                    component: ResolucionConvenioPagoComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'solicitud-abogado',
                    component: SolicitudAbogadoComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'settings',
                    component: SettingsComponent,
                    canActivate: [AuthGuard]
                },
                {
                    path: 'archivo-determinado',
                    component: ArchivoDeterminadoComponent,
                    canActivate: [AuthGuard]
                },

        ]
    },
    {
        path: 'register',
        component: ExternalRegisterComponent
    },
    {
        path: '',
        canActivate: [LoginGuard],
        component: LoginComponent
    },
   {
       path: 'forgot-password',
       component: ForgottenPasswordComponent

   }


];

