import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Answer} from "../../../model/Answer";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class QuestionnaireFormService {
  private userId = '2';

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getFields() {
    let param = new HttpParams().set("userId", "2");
    return this.http.get(environment.host + "/responses/form", {params: param})
  }

  postAnswer(answer: Answer[]) {
    return this.http.post(environment.host + "/responses", {answer})
  }
}
