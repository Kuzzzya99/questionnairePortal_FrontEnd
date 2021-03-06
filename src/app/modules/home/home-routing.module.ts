import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {QuestionnaireFormComponent} from "./components/questionnaire-form/questionnaire-form.component";
import {ResponsesComponent} from "./components/responses/responses.component";
import {SuccessSubmitComponent} from "./components/success-submit/success-submit.component";
import {MembersComponent} from "./components/members/members.component";

const homeRoutes: Routes = [
  {path: 'changePassword', component: ChangePasswordComponent},
  {path: 'editProfile', component: EditProfileComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'questionnaireForm', component: QuestionnaireFormComponent},
  {path: 'responses', component: ResponsesComponent},
  {path: 'successSubmit', component: SuccessSubmitComponent},
  {path: 'members', component: MembersComponent},
  {path: '**', redirectTo: 'homePage', pathMatch: 'full'},
  {path: '', loadChildren: 'homePage', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
