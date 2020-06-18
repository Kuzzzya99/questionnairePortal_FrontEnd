import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/register-service";
import {User} from "../../../../model/User";
import {RegisterMockService} from "../../mock-services/register-mock-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service:RegisterService,
              private mockService:RegisterMockService) { }

  ngOnInit(): void {
  }

  signUp (email:string,
          password:string,
          firstName:string,
          lastName:string,
          phoneNumber:string){

    // this.service.signUp(new User(email, password, firstName,lastName,phoneNumber))
    //   .subscribe(data => {
    //     console.log(data);
    //   })

    this.mockService.signUp(new User(email, password, firstName,lastName,phoneNumber))
      .subscribe(data => {
        console.log(data);
      })

  }

}
