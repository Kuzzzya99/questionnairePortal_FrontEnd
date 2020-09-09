import {Component, OnInit} from '@angular/core';
import {QuestionnaireFormService} from "../../services/questionnaire-form-service";
import {Answer} from "../../../../model/Answer";
import {Field} from "../../../../model/Field";
import {FieldOption} from "../../../../model/FieldOption";
import {DataForForm} from "../../../../model/DataForForm";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forEachComment} from "tslint";
import {group} from "@angular/animations";

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss']
})
export class QuestionnaireFormComponent implements OnInit {

  answer: Answer[]=[];
  arr: DataForForm[] = [];
  public numOfOptions: string[] = [];
  model: NgbDateStruct;
  formGroup: FormGroup;
  formControlArr = [];
  radio = [];
  private radioAnswer = [];
  private dateAnswer = [];
  private checkboxAnswer = [];


  constructor(private service: QuestionnaireFormService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      A: new FormControl('', [
        // Validators.pattern('(^[A-Z][a-z]+)+\,(^[A-Z][a-z]+)+')
      ])
    })
    this.getFields();
    this.formGroup.removeControl("A");
  }

  getFields() {
    this.service.getFields().subscribe((data: DataForForm[]) => {
      this.arr = data;
      this.arr.forEach(el => {
          if (el.type == 1 || el.type == 2 || el.type == 5) {
            this.makeNewFormControl(el.label);
          }
        }
      )
    })
  }

  makeNewFormControl(formControlLabel) {
    this.formGroup.addControl(formControlLabel, new FormControl('', []));
    this.formControlArr.push(formControlLabel);
  }

  getRadioButtonAnswer() {
    this.arr.forEach(el => {
      if (el.type === 3) {
        var radios = document.getElementsByName(el.label);
        for (var i = 0; i < radios.length; i++) {
          //@ts-ignore
          if (radios[i].checked) {
            //@ts-ignore
            this.radioAnswer = radios[i].value;
            return true; // checked
          }
        }
      }
    })
  }

  getDateAnswer() {
    this.arr.forEach(el => {
      if (el.type === 6) {
        this.dateAnswer.push(this.model);
      }
    })
  }

  getCheckboxAnswer() {
    this.arr.forEach(el => {
      if (el.type === 4) {
        var radios = document.getElementsByName(el.label);
        for (var i = 0; i < radios.length; i++) {
          //@ts-ignore
          if (radios[i].checked) {
            //@ts-ignore
            this.checkboxAnswer.push(radios[i].value);
          }
        }
      }
    })
  }

  getAnswer(){

  }


  save() {
    this.getRadioButtonAnswer();
    this.getCheckboxAnswer();
    this.getDateAnswer();
    console.log(this.formGroup.getRawValue(),
      this.radioAnswer,
      this.checkboxAnswer,
      this.dateAnswer);
    this.radioAnswer = [];
    this.checkboxAnswer = [];
    this.dateAnswer = [];
  }
}
