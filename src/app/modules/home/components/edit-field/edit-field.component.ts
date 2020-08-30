import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FieldType} from "../../../../model/FieldType";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {EditFieldService} from "../../services/edit-field-service";
import {Field} from "../../../../model/Field";

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss']
})
export class EditFieldComponent implements OnInit {
  formGroup: FormGroup;
  @Input() text: string;
  @Input() buttonAdd: boolean;
  @Input() field: Field;
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
      Label: new FormControl(this.field.label, [
        Validators.pattern('^[A-Z][a-z]+')
      ]),
      Type: new FormControl(this.field.type, [
        Validators.required
      ])
    });
    this.isRequired = false;
    this.isActive = false;
  }

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private service: EditFieldService,
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

  editField() {
    this.service.editField(this.formGroup.value.Label,
      this.findTypeIndex(),
      this.parseOption(),
      this.isRequired,
      this.isActive,
      this.cookieService.get('userId')).subscribe(data =>
        console.log(data),
      error => {
        alert("Invalid data")
      },
      () => this.router.navigate(['../home/homePage']))
    console.log(this.formGroup.value);
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
