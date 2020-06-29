import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Field} from "../../../model/Field";
import {Answer} from "../../../model/Answer";
import {of} from "rxjs";
import {FieldOption} from "../../../model/FieldOption";

@Injectable({
  providedIn: "root"
})

export class QuestionnaireFormMockService {

  private fields: Field[] = [
    new Field("1", "Last name", "single_line_text", true, true),
    new Field("2", "Sex", "radio_button", true, true),
    new Field("3", "Have pet", "checkbox", true, true),
    new Field("4", "Combobox", "combobox", true, true),
    new Field("5", "Date of birth", "date", true, true),
  ];
  private options: FieldOption[] = [
    new FieldOption(1, "male"),
    new FieldOption(2, "female")
  ];

  constructor(private http: HttpClient) {
  }

  getFields() {
    return of(this.fields)
  }

  postAnswer(answer: Answer[]) {
    return of("Success")
  }
}
