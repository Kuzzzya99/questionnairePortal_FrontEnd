import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class QuestionnaireFormService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {

  }

  getFields(email) {
    let param = new HttpParams().set("email", email);
    return this.http.get(environment.host + "/responses/form", {params: param})
  }

  addResponse(response, email) {
    response = new Object(response);
    let param = new HttpParams().set("email", email);
    return this.http.post(environment.host + "/responses/add", {response}, {params: param})
  }
}
