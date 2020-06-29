import {Component, OnInit} from '@angular/core';
import {QuestionnaireFormService} from "../../services/questionnaire-form-service";
import {environment} from "../../../../../environments/environment";
import {Answer} from "../../../../model/Answer";
import {QuestionnaireFormMockService} from "../../mock-services/questionnaire-form-mock-service";

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss']
})
export class QuestionnaireFormComponent implements OnInit {

  private answer: Answer[] = [new Answer(1, "Politykin")]

  constructor(private service: QuestionnaireFormService,
              private mockService: QuestionnaireFormMockService) {
  }

  ngOnInit(): void {
  }

  // getFields() {
  //   this.service.getFields().subscribe(data => {
  //     console.log(data);
  //   })
  // }
  //
  // postAnswer(answer: Answer[]) {
  //   this.service.postAnswer(answer).subscribe(data => {
  //     console.log(data);
  //   })
  // }

  getFields() {
    this.mockService.getFields().subscribe(data => {
      console.log(data);
    })
  }

  postAnswer(answer = this.answer) {
    this.mockService.postAnswer(answer).subscribe(data => {
      console.log(data);
    })
  }

}
