import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Field} from "../../../model/Field";
import {Answer} from "../../../model/Answer";
import {of} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class QuestionnaireFormMockService {

  private fields:Field[] = [new Field("1", "lastName", "single_line_text", true, true)];

  constructor(private http: HttpClient) {
  }

  getFields() {
    return of(this.fields)
  }

  postAnswer(answer: Answer[]) {
    return of("Success")
  }
}
