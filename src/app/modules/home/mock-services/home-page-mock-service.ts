import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Field} from "../../../model/Field";

@Injectable({
  providedIn: "root"
})

export class HomePageService {

  constructor(private http: HttpClient) {
  }

  homePagePost(field: Field) {
    return this.http.post(environment.host + "/fields", {field})
  }

  homePageGet() {
    return this.http.get(environment.host + "/fields")
  }

  homePagePut(field: Field) {
    return this.http.put(environment.host + "/fields", {field})
  }

  homePageDelete(id) {
    return this.http.delete(environment.host + "/fields/id=" + id)
  }
}
