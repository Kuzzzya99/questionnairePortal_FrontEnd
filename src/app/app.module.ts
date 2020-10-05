import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CookieService} from "ngx-cookie-service";
import {TokenInterceptorService} from "./interceptor/token-interceptor-service";
import {FileUploadModule} from "ng2-file-upload";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
