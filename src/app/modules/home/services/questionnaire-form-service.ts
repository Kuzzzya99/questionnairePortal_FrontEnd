import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Answer} from "../../../model/Answer";

@Injectable({
  providedIn: "root"
})

export class QuestionnaireFormService {

  constructor(private http: HttpClient) {
  }

  getFields() {
    let param = new HttpParams().set("userId", "1");
    return this.http.get(environment.host + "/responses/form", {params: param})
  }

  addResponse(data) {
    return this.http.post(environment.host + "/responses", {data})
  }
}
