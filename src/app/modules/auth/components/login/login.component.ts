import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private loginService: LoginService,
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
      ]),
    })
  }

  login() {

    let token;
    this.loginService.login(this.formGroup.value.Username, this.formGroup.value.Password).subscribe(
      data =>
        token = data,
      error =>
        alert('Wrong user or password'),
      () => this.router.navigate(['../home']));
  }
}
