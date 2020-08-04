import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {HomePageService} from "../../services/home-page-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
}
