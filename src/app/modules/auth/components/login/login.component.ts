import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  private cookieValue: string;

  constructor(private loginService: LoginService,
              private cookieService: CookieService,
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
    // this.cookieService.set('cookie-name', 'our cookie value');
    // this.cookieValue = this.cookieService.get('cookie-name');
  }

  login() {
    this.loginService.login(this.formGroup.value.Username, this.formGroup.value.Password).subscribe(
      (data: any) => (
        this.cookieService.set('userId', data.userId)
      ),
      error =>
        alert('Wrong user or password'),
      () => this.router.navigate(['../home']))
  }

}
