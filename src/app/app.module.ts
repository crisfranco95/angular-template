import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsDefinitionModule } from '../app/material-components-definition/material-components-definition.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routing/routing';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ExternalRegisterComponent } from './external-register/external-register.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AuthGuard } from './guard/AuthGuard';
import { LoginGuard } from './guard/LoginGuard';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { MasterComponent } from './master/master.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ExternalRegisterComponent,
    ForgottenPasswordComponent,
    HomeDashboardComponent,
    AboutComponent,
    SettingsComponent,
    MasterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsDefinitionModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
