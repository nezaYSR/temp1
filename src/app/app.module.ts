import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AuthModule} from "./module/auth/auth.module";
import { RootComponent } from './pages/root/root.component';
import {WithCredentialsInterceptor} from "./helpers/with-credentials-interceptor";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    CookieService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: WithCredentialsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
