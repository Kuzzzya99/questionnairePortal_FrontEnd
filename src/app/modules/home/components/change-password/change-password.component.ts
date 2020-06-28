import {Component, OnInit} from '@angular/core';
import {ChangePasswordService} from "../../services/change-password-service";
import {ChangePasswordMockService} from "../../mock-services/change-password-mock-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  private password = "12345678";
  private newPassword = "87654321";
  public user = "JohnDoe@gmail.com";
  public formGroup: FormGroup;

  constructor(private service: ChangePasswordService,
              private mockService: ChangePasswordMockService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])})

      this.service.getUser().subscribe((user: any) => {
        console.log(user);
        this.user = user;
      })
  }

    // changePassword (password:string,
    //                 newPassword:string,
    //                 ){
    //
    //   this.service.changePassword(password, newPassword).subscribe(data => {
    //     console.log(data);
    //     })
    //
    // }

    changePassword(password = this.password,
      newPassword = this.newPassword,
    )
    {

      this.mockService.changePassword(password, newPassword).subscribe(data => {
        console.log(data);
      })

    }

  }
