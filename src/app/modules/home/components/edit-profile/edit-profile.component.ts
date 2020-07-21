import {Component, OnInit} from '@angular/core';
import {EditProfileService} from "../../services/edit-profile-service";
import {EditProfileMockService} from "../../mock-services/edit-profile-mock-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private service: EditProfileService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Username: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      FirstName: new FormControl('', [
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      LastName: new FormControl('', [
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      Phone: new FormControl('', [
        Validators.pattern('^[\\+\\d+]')
      ])
    })
  }

  editProfile() {
    this.service.editProfile(this.formGroup.value.FirstName,
      this.formGroup.value.LastName,
      this.formGroup.value.Username,
      this.formGroup.value.Phone).subscribe(data =>
        console.log(data),
      error => {
        alert("Invalid data")
      },
      () => this.router.navigate(['../home/homePage']))
  }


}
