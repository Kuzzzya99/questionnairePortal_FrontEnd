import {Component, OnInit} from '@angular/core';
import {EditProfileService} from "../../services/edit-profile-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public formGroup: FormGroup;

  public firstName;
  public lastName;
  public login;
  public phone;

  constructor(private service: EditProfileService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.getUserProfileInfo();
    this.formGroup = new FormGroup({
      FirstName: new FormControl('', [
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      LastName: new FormControl('', [
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      Phone: new FormControl(null, [
        Validators.pattern('^[\\+\\d+]')
      ])
    })
  }

  getUserProfileInfo() {
    this.service.getUserProfileInfo().subscribe(
      (data: any) => (
        this.firstName = data.firstName,
          this.lastName = data.lastName,
          this.phone = data.phoneNumber))
  }

  editProfile() {
    this.service.editProfile(this.formGroup.value.FirstName,
      this.formGroup.value.LastName,
      this.formGroup.value.Phone).subscribe(data =>
        data,
      error => {
        alert("Invalid data")
      },
      () => this.router.navigate(['../home/homePage']))
  }


}
