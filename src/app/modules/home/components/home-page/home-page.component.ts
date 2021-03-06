import {Component, OnInit} from '@angular/core';
import {Field} from "../../../../model/Field";
import {HomePageService} from "../../services/home-page-service";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  arr: Field[] = [];
  page = 1;
  pageSize = 10;
  fieldType: any;


  constructor(private service: HomePageService,
              private cookieService: CookieService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.findAllFields();
  }

  findAllFields() {
    this.service.findAllFields().subscribe((data: Field[]) => {
      this.arr = data;
    })
  }

  findTypeIndex(a) {
    let typeIndex;
    switch (a) {
      case 1:
        typeIndex = 'Single line text';
        break;
      case 2:
        typeIndex = 'Multiline text';
        break;
      case 3:
        typeIndex = 'Radio button';
        break;
      case 4:
        typeIndex = 'Checkbox';
        break;
      case 5:
        typeIndex = 'Combobox';
        break;
      case 6:
        typeIndex = 'Date';
        break;
    }
    return typeIndex;
  }

  deleteField(fieldId) {
    this.service.deleteField(fieldId).subscribe(data => alert('You have successfully delete field'),
      error => {
        alert("Can't delete field")
      },
      () => this.findAllFields())
  }


  setFieldId(fieldId) {
    this.cookieService.set('fieldId', fieldId);
  }


}
