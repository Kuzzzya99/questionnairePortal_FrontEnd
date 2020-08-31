import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Answer} from "../../../model/Answer";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class QuestionnaireFormService {
  private userId = '1';

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getFields() {
    return this.http.get(environment.host + "/responses/form/" + this.userId)
  }

  postAnswer(answer: Answer[]) {
    return this.http.post(environment.host + "/responses", {answer})
  }
}
