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

  arr: DataForForm[] = [];
  model: NgbDateStruct;
  formGroup: FormGroup;
  formControlArr = [];
  private radioAnswer: Answer;
  private dateAnswer: Answer[] = [];
  private checkboxAnswer: Answer[] = [];
  private formGroupKeys: string[];
  private formGroupValues: string[];
  private formGroupAnswer: Answer[] = [];
  private formGroupKeyValue: Answer;
  private dateModel: Answer;
  private checkModel: Answer;
  private checkboxValues: string[] = [];
  private date: number[];
  private splittedDate: any[] = [];
  private myJSON: string;


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
        for (let i = 0; i < radios.length; i++) {
          //@ts-ignore
          if (radios[i].checked) {
            //@ts-ignore
            this.radioAnswer = new Answer(el.label, radios[i].value);
            this.formGroupAnswer.push(this.radioAnswer);
            return true; // checked
          }
        }
      }
    })
  }

  getDateAnswer() {
    this.arr.forEach(el => {
      if (el.type === 6) {
        this.date = Object.values(this.model);
        this.dateModel = new Answer(el.label, this.date.join('/'));
        this.formGroupAnswer.push(this.dateModel);
      }
    })
  }

  getCheckboxAnswer() {
    this.checkboxValues = [];
    this.arr.forEach(el => {
      if (el.type === 4) {
        var radios = document.getElementsByName(el.label);
        for (let i = 0; i < radios.length; i++) {
          //@ts-ignore
          if (radios[i].checked) {
            //@ts-ignore
            this.checkboxValues.push(radios[i].value);
          }
        }
        //@ts-ignore
        this.checkModel = new Answer(el.label, this.checkboxValues.join(', '));
        this.formGroupAnswer.push(this.checkModel);
      }
    })
  }

  getAnswer() {
    this.formGroupKeys = Object.keys(this.formGroup.getRawValue());
    this.formGroupValues = Object.values(this.formGroup.getRawValue());
    for (let i = 0; i < this.formGroupKeys.length; i++) {
      this.formGroupKeyValue = new Answer(this.formGroupKeys[i], this.formGroupValues[i]);
      this.formGroupAnswer.push(this.formGroupKeyValue);
    }
    this.getRadioButtonAnswer();
    this.getDateAnswer();
    this.getCheckboxAnswer();
    this.myJSON = JSON.stringify(this.formGroupAnswer);
  }


  save() {
    this.getAnswer();
    console.log(
      this.myJSON);
    this.service.addResponse(this.myJSON).subscribe(data =>
      console.log(data));
    this.formGroupAnswer = [];
  }

}
