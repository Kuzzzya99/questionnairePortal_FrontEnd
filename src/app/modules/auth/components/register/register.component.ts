import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register-service";
import {User} from "../../../../model/User";
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
        Validators.required
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
      this.formGroup.value.Surname,
      this.formGroup.value.Phone))
      .subscribe(data =>
          console.log(data),
        error => {
          alert("User with this email already exists")
        },
        () => this.router.navigate(['../auth']))
  }
}
