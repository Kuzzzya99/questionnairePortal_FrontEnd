import { Component, OnInit } from '@angular/core';
import {Field} from "../../../../model/Field";
import {environment} from "../../../../../environments/environment";
import {EditProfileService} from "../../services/edit-profile-service";
import {HomePageService} from "../../services/home-page-service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private service: HomePageService) { }

  ngOnInit(): void {
  }

  homePagePost(field: Field) {
    this.service.homePagePost(field).subscribe(data => {
      console.log(data);
    })
  }

  homePageGet() {
    this.service.homePageGet().subscribe(data => {
      console.log(data);
    })
  }

  homePagePut(field: Field) {
    this.service.homePagePut(field).subscribe(data => {
      console.log(data);
    })
  }

  homePageDelete(id) {
    this.service.homePageDelete(id).subscribe(data => {
      console.log(data);
    })
  }
}
