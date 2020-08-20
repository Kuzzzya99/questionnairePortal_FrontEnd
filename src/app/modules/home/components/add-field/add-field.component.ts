import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddFieldService} from "../../services/add-field-service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss']
})
export class AddFieldComponent implements OnInit {
  formGroup: FormGroup;
  @Input() text: string;
  @Input() buttonAdd: boolean;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Username: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      Name: new FormControl('', [
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      Phone: new FormControl('', [
        Validators.pattern('^[\\+\\d+]')
      ])
    })
  }

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private service: AddFieldService,
              private cookieService: CookieService,
              public router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  addField() {
    this.service.addField('label',
      1,
      'adsd',
      true,
      true,
      this.cookieService.get('userId') ).subscribe(data =>
        console.log(data),
      error => {
        alert("Invalid data")
      },
      () => this.router.navigate(['../home/homePage']))
  }
}
