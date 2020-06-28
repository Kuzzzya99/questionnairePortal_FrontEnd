import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';
import { SuccessSubmitComponent } from './components/success-submit/success-submit.component';
import { ResponsesComponent } from './components/responses/responses.component';
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {HomeRoutingModule} from "./home-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    ChangePasswordComponent,
    EditProfileComponent,
    HomePageComponent,
    QuestionnaireFormComponent,
    SuccessSubmitComponent,
    ResponsesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class HomeModule { }
