import {Component, OnInit} from '@angular/core';
import {QuestionnaireFormService} from "../../services/questionnaire-form-service";
import {Answer} from "../../../../model/Answer";
import {Field} from "../../../../model/Field";
import {FieldOption} from "../../../../model/FieldOption";
import {DataForForm} from "../../../../model/DataForForm";

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss']
})
export class QuestionnaireFormComponent implements OnInit {

  arr: DataForForm[] = [];
  public numOfOptions: string[] = [];
  private answer: Answer[] = [new Answer(1, "Politykin")]

  constructor(private service: QuestionnaireFormService) {
  }

  ngOnInit(): void {
    this.getFields();
  }

  getFields() {
    this.service.getFields().subscribe((data:DataForForm[]) => {
      this.arr = data;

      })
  }

  //
  // postAnswer(answer: Answer[]) {
  //   this.service.postAnswer(answer).subscribe(data => {
  //     console.log(data);
  //   })
  // }

}
