import { Routes, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guard/AuthGuard';
import { LoginGuard } from '../guard/LoginGuard';
import { HomeComponent } from '../home/home.component';
import { ExternalRegisterComponent } from '../external-register/external-register.component';
import { ForgottenPasswordComponent } from '../forgotten-password/forgotten-password.component';
import { HomeDashboardComponent } from '../home-dashboard/home-dashboard.component';


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

