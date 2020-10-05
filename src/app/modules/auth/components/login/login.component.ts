import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {FileUploader} from "ng2-file-upload";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  file;
  public uploader: FileUploader = new FileUploader({
    url: environment.host + "/photoAuth",
    additionalParameter: File
  });
  file1: any;
  file2: any;
  public text;

  constructor(private loginService: LoginService,
              private cookieService: CookieService,
              public router: Router
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
        // this.autobahnService.Autobahn();
      },
      error =>
        alert('Wrong user or password'),
      () => this.router.navigate(['../home']))
  }

  upload() {
    this.loginService.upload(this.file1, this.file2).subscribe((data) => {
      this.text = data;
    })
  }

  onFileSelected1($event: any) {
    console.log($event);
    this.file1 = $event.target.files[0];
  }
  onFileSelected2($event: any) {
    console.log($event);
    this.file2 = $event.target.files[0];
  }
}
