import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddFieldService} from "../../services/add-field-service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {FieldType} from "../../../../model/FieldType";

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss']
})
export class AddFieldComponent implements OnInit {
  formGroup: FormGroup;
  @Input() text: string;
  @Input() buttonAdd: boolean;
  isRequired = false;
  isActive = false;

  selectedValue: FieldType;

  types: FieldType[] = [
    {value: 0, viewValue: 'Select type'},
    {value: 1, viewValue: 'Single line text'},
    {value: 2, viewValue: 'Multiline text'},
    {value: 3, viewValue: 'Radio button'},
    {value: 4, viewValue: 'Checkbox'},
    {value: 5, viewValue: 'Combobox'},
    {value: 6, viewValue: 'Date'}];

  options = ['']

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Option: new FormControl('', [
        // Validators.pattern('(^[A-Z][a-z]+)+\,(^[A-Z][a-z]+)+')
      ]),
      Label: new FormControl('', [
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      Type: new FormControl('', [
        Validators.required
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

  findTypeIndex() {
    let typeIndex;
    this.types.forEach(el => {
      if (this.formGroup.value.Type === el.viewValue) {
        typeIndex = el.value;
      }
    })
    return typeIndex;
  }

  addField() {
    this.service.addField(this.formGroup.value.Label,
      this.findTypeIndex(),
      this.parseOption(),
      this.isRequired,
      this.isActive,
      this.cookieService.get('userId')).subscribe(data =>
        data,
      error => {
        alert("Invalid data")
      },
      () => this.router.navigate(['../home/homePage']))
  }

  required() {
    this.isRequired = !this.isRequired;

  }

  active() {
    this.isActive = !this.isActive;
  }

  parseOption() {
    return this.formGroup.value.Option.split(", ");
  }

}
