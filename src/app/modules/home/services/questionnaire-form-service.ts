import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Answer} from "../../../model/Answer";

@Injectable({
  providedIn: "root"
})

export class QuestionnaireFormService {

  constructor(private http: HttpClient) {
  }

  getFields() {
    return this.http.get(environment.host + "/get_fields")
  }

  postAnswer(answer: Answer[]) {
    return this.http.post(environment.host + "/responses", {answer})
  }
}
