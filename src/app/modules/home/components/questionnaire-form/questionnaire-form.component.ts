import {Component, OnInit} from '@angular/core';
import {QuestionnaireFormService} from "../../services/questionnaire-form-service";
import {Answer} from "../../../../model/Answer";
import {DataForForm} from "../../../../model/DataForForm";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


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
  private formGroupKeys: string[];
  private formGroupValues: string[];
  private formGroupAnswer: Answer[] = [];
  private formGroupKeyValue: Answer;
  private dateModel: Answer;
  private checkModel: Answer;
  private checkboxValues: string[] = [];
  private date: number[];
  private questionList: Object[] = [];
  private keys: string[];
  private questions: any[];


  constructor(private service: QuestionnaireFormService,
              public router: Router
  ) {
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
            if (el.required) {
              this.makeNewRequiredFormControl(el.id, el.label)
            } else {
              this.makeNewFormControl(el.id, el.label);
            }
          }
        }
      )
    })
  }

  makeNewFormControl(id, formControlLabel) {
    this.formGroup.addControl(formControlLabel, new FormControl('', []));
    this.formControlArr.push(formControlLabel);
    this.questionList.push({id, formControlLabel});

  }

  makeNewRequiredFormControl(id, formControlLabel) {
    this.formGroup.addControl(formControlLabel, new FormControl('', [Validators.required]));
    this.formControlArr.push(formControlLabel);
    this.questionList.push({id, formControlLabel});
  }

  getRadioButtonAnswer() {
    this.arr.forEach(el => {
      if (el.type === 3) {
        var radios = document.getElementsByName(el.label);
        for (let i = 0; i < radios.length; i++) {
          //@ts-ignore
          if (radios[i].checked) {
            //@ts-ignore
            this.radioAnswer = new Answer(el.id, el.label, radios[i].value);
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
        this.dateModel = new Answer(el.id, el.label, this.date.join('/'));
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
        this.checkModel = new Answer(el.id, el.label, this.checkboxValues.join(', '));
        this.formGroupAnswer.push(this.checkModel);
      }
    })
  }

  getAnswer() {
    this.formGroupKeys = Object.keys(this.formGroup.getRawValue());
    this.formGroupValues = Object.values(this.formGroup.getRawValue());
    for (let i = 0; i < this.formGroupValues.length; i++) {
      if (this.formGroupValues[i] != '') {
        this.questions = Object.values(this.questionList[i]);
        this.formGroupKeys.forEach(el => {
          if (this.questions[1] === el) {
            this.formGroupKeyValue = new Answer(this.questions[0], this.formGroupKeys[i], this.formGroupValues[i]);
            this.formGroupAnswer.push(this.formGroupKeyValue);
          }
        })
      }
    }
    this.getRadioButtonAnswer();
    this.getDateAnswer();
    this.getCheckboxAnswer();
    this.questionList = [];
  }

  makeAnswerInCorrectOrder(formGroupAnswer) {
    formGroupAnswer.sort((a, b) => a.id > b.id ? 1 : -1);
    return formGroupAnswer;
  }


  save() {
    console.log(this.formGroup);
    console.log(this.formGroupAnswer);
    this.getAnswer();
    this.service.addResponse(this.makeAnswerInCorrectOrder(this.formGroupAnswer)).subscribe(data =>
        data,
      error => {
        alert("Invalid data")
      },
      () => (this.router.navigate(['../home/successSubmit']),
        this.formGroupAnswer = [])
    )
  }

}
