import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login(email: string, password: string) {

    this.loginService.login(email, password).subscribe(data => {
      console.log(data);
    })

  }

}
