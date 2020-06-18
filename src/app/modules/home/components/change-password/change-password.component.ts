import { Component, OnInit } from '@angular/core';
import {ChangePasswordService} from "../../services/change-password-service";
import {User} from "../../../../model/User";
import {ChangePasswordMockService} from "../../mock-services/change-password-mock-service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  private password = "12345678";
  private newPassword = "87654321";

  constructor(private service:ChangePasswordService,
              private mockService:ChangePasswordMockService) { }

  ngOnInit(): void {
  }

  // changePassword (password:string,
  //                 newPassword:string,
  //                 ){
  //
  //   this.service.changePassword(password, newPassword).subscribe(data => {
  //     console.log(data);
  //     })
  //
  // }

  changePassword (password=this.password,
                  newPassword=this.newPassword,
  ){

    this.mockService.changePassword(password, newPassword).subscribe(data => {
      console.log(data);
    })

  }

}
