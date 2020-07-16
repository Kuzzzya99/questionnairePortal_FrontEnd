import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register-service";
import {User} from "../../../../model/User";
import {RegisterMockService} from "../../mock-services/register-mock-service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private service: RegisterService,
              private mockService: RegisterMockService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Login: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      ConfirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      Name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      Surname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      Phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+')
      ])
    })
  }

  signUp() {
    if (this.formGroup.value.Password !== this.formGroup.value.ConfirmPassword) {
      alert("Passwords not match");
    }

    this.service.signUp(new User(
      this.formGroup.value.Login,
      this.formGroup.value.Password,
      this.formGroup.value.Name,
      this.formGroup.value.SurName,
      this.formGroup.value.Phone))
      .subscribe(data =>
          console.log(data),
        error => {
          alert("User with this email already exists")
        },
        () => this.router.navigate(['../auth']))
  }
}
