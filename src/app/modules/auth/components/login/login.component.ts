import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login-service";
import {ResponsesMockService} from "../../../home/mock-services/responses-mock-service";
import {LoginMockService} from "../../mock-services/login-mock-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private email = "qwerty@gmail.com"
  private password = "qwertyuiop"

  constructor(private loginService: LoginService,
              private mockService: LoginMockService) {
  }

  ngOnInit(): void {
  }

  // login(email = this.email, password = this.password) {
  //
  //   this.loginService.login(email, password).subscribe(data => {
  //     console.log(data);
  //   })

    login(email = this.email, password = this.password) {

      this.mockService.login(email, password).subscribe(data => {
        console.log(data);
      })

  }

}
