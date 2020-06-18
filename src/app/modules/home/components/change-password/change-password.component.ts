import { Component, OnInit } from '@angular/core';
import {ChangePasswordService} from "../../services/change-password-service";
import {User} from "../../../../model/User";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service:ChangePasswordService) { }

  ngOnInit(): void {
  }

  changePassword (password:string,
                  newPassword:string,
                  ){

    this.service.changePassword(password, newPassword).subscribe(data => {
      console.log(data);
      })

  }

}
