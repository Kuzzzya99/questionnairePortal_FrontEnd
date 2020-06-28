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
      Username: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      Name: new FormControl('',[
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      Phone: new FormControl('',[
        Validators.pattern('^[\\+\\d+]')
      ])
    })
  }

  signUp(email: string,
         password: string,
         firstName: string,
         lastName: string,
         phoneNumber: string) {

    // this.service.signUp(new User(email, password, firstName,lastName,phoneNumber))
    //   .subscribe(data => {
    //     console.log(data);
    //   })

    this.mockService.signUp(new User(email, password, firstName, lastName, phoneNumber))
      .subscribe(data => {
        console.log(data);
      })

  }

}
