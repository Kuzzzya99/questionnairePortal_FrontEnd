import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPasswordComponent } from './components/edit-password/edit-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionnaireFormComponent } from './components/questionnaire-form/questionnaire-form.component';
import { SuccessSubmitComponent } from './components/success-submit/success-submit.component';
import { ResponcesComponent } from './components/responses/responces.component';
import { ResponsesComponent } from './components/responses/responses.component';



@NgModule({
  declarations: [ChangePasswordComponent, EditProfileComponent, EditPasswordComponent, HomePageComponent, QuestionnaireFormComponent, SuccessSubmitComponent, ResponcesComponent, ResponsesComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
