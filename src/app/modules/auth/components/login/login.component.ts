import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login-service";
import {LoginMockService} from "../../mock-services/login-mock-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private email = "qwerty@gmail.com"
  private password = "qwertyuiop"
  public formGroup: FormGroup;

  constructor(private loginService: LoginService,
              private mockService: LoginMockService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Username: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
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
