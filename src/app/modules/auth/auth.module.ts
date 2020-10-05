import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FileUploadModule} from "ng2-file-upload";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    FileUploadModule
  ]
})
export class AuthModule {
}
