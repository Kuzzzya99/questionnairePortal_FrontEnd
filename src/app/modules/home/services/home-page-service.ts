import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Field} from "../../../model/Field";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class HomePageService {
  private field: string[];

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  findAllFields(){
    return this.http.get(environment.host + "/fields/all/" + this.cookieService.get("userId"))
  }

  deleteField(fieldId) {
    return this.http.delete(environment.host + '/fields/' + fieldId)
  }


  // homePagePost(field: Field) {
  //   return this.http.post(environment.host + "/fields", {field})
  // }
  //
  // homePageGet() {
  //   return this.http.get(environment.host + "/fields")
  // }
  //
  // homePagePut(field: Field) {
  //   return this.http.put(environment.host + "/fields", {field})
  // }
  //
  // homePageDelete(id) {
  //   return this.http.delete(environment.host + "/fields/id=" + id)
  // }
}
