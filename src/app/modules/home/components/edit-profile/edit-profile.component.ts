import {Component, OnInit} from '@angular/core';
import {EditProfileService} from "../../services/edit-profile-service";
import {EditProfileMockService} from "../../mock-services/edit-profile-mock-service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  private firstName;
  private lastName;
  private email;
  private phoneNumber;

  constructor(private service: EditProfileService,
              private mockService: EditProfileMockService) {
  }

  ngOnInit(): void {
  }

  // editProfile(firstName: string,
  //             lastName: string,
  //             email: string,
  //             phoneNumber: string
  // ) {
  //   this.service.editProfile(firstName,lastName,email,phoneNumber).subscribe(data => {
  //     console.log(data);
  //   })
  // }

  editProfile(firstName= this.firstName,
              lastName = this.lastName,
              email = this.email,
              phoneNumber = this.phoneNumber
  ) {
    this.mockService.editProfile(firstName,lastName,email,phoneNumber).subscribe(data => {
      console.log(data);
    })
  }

}
