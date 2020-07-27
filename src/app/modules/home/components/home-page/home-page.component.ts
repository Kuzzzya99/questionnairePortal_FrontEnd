import {Component, OnInit} from '@angular/core';
import {Field} from "../../../../model/Field";
import {environment} from "../../../../../environments/environment";
import {EditProfileService} from "../../services/edit-profile-service";
import {HomePageService} from "../../services/home-page-service";
import {HomePageMockService} from "../../mock-services/home-page-mock-service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public arr = [1, 2, 3];
  private field: Field = new Field("1", "Color", "single_line_text", true, true);

  page= 1;
  pageSize= 10;

  constructor(private service: HomePageService,
              private mockService: HomePageMockService,
  ){}

  ngOnInit(): void {

  }

  homePagePost(field = this.field) {
    this.mockService.homePagePost(field).subscribe(data => {
      console.log(data);
    })
  }

  homePageGet() {
    this.mockService.homePageGet().subscribe(data => {
      console.log(data);
    })
  }

  homePagePut(field = this.field) {
    this.mockService.homePagePut(field).subscribe(data => {
      console.log(data);
    })
  }

  homePageDelete(id) {
    this.mockService.homePageDelete(id).subscribe(data => {
      console.log(data);
    })
  }

  // homePagePost(field: Field) {
  //   this.service.homePagePost(field).subscribe(data => {
  //     console.log(data);
  //   })
  // }
  //
  // homePageGet() {
  //   this.service.homePageGet().subscribe(data => {
  //     console.log(data);
  //   })
  // }
  //
  // homePagePut(field: Field) {
  //   this.service.homePagePut(field).subscribe(data => {
  //     console.log(data);
  //   })
  // }
  //
  // homePageDelete(id) {
  //   this.service.homePageDelete(id).subscribe(data => {
  //     console.log(data);
  //   })
  // }


}
