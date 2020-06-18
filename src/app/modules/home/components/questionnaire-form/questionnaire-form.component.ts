import { Component, OnInit } from '@angular/core';
import {QuestionnaireFormService} from "../../services/questionnaire-form-service";
import {environment} from "../../../../../environments/environment";
import {Answer} from "../../../../model/Answer";

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss']
})
export class QuestionnaireFormComponent implements OnInit {

  constructor(private service:QuestionnaireFormService) { }

  ngOnInit(): void {
  }

  getFields() {
    this.service.getFields().subscribe(data => {
      console.log(data);
    })
  }

  postAnswer(answer: Answer[]) {
    this.service.postAnswer(answer).subscribe(data => {
      console.log(data);
    })
  }

}
