import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {AutobahnService} from "../../../../shared/services/autobahn-service";

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
              public router: Router,
              private autobahnService: AutobahnService,
              ) {
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
    this.cookieService.deleteAll();
  }

  login() {
    this.loginService.login(this.formGroup.value.Username, this.formGroup.value.Password).subscribe(
      (data: any) => {
        this.cookieService.set('userId', data.id);
        this.cookieService.set('token', data.token);
        this.cookieService.set('tokenId', data.tokenId);
        this.autobahnService.Autobahn();
      },
      error =>
        alert('Wrong user or password'),
      () => this.router.navigate(['../home']))
  }

}
