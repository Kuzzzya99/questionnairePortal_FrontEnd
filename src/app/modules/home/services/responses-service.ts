import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class ResponsesService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  findAllFields() {
    let param = new HttpParams().set("userId", this.cookieService.get("userId"));
    return this.http.get(environment.host + "/fields", {params: param})
  }

  responses() {
    let param = new HttpParams().set("userId", this.cookieService.get("userId"));
    return this.http.get(environment.host + "/responses/all", {params: param})
  }
}
