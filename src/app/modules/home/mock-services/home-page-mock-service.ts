import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Field} from "../../../model/Field";
import {of} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class HomePageMockService {

  private field: Field = new Field("5",
    "First name",
    "single_line_text",
    true,
    true);

  constructor(private http: HttpClient) {
  }

  homePagePost(field: Field) {
    return of("success");
  }

  homePageGet() {
    return this.http.get(environment.host + "/fields")
  }

  homePagePut(field: Field) {
    return of("success edit");
  }

  homePageDelete(id) {
    return this.http.delete(environment.host + "/fields/id=" + id)
  }
}
