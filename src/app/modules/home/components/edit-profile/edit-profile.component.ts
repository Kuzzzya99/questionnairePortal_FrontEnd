import {Component, OnInit} from '@angular/core';
import {EditProfileService} from "../../services/edit-profile-service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private service: EditProfileService) {
  }

  ngOnInit(): void {
  }

  editProfile(firstName: string,
              lastName: string,
              email: string,
              phoneNumber: string
  ) {
    this.service.editProfile(firstName,lastName,email,phoneNumber).subscribe(data => {
      console.log(data);
    })
  }

}
