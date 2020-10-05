import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class HomePageService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  findAllFields() {
    let param = new HttpParams().set("userId", this.cookieService.get("userId"));
    return this.http.get(environment.host + "/fields", {params: param})
  }

  deleteField(fieldId) {
    return this.http.delete(environment.host + '/fields/' + fieldId)
  }
}
