import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn:"root"
})

export class ResponsesService {

  constructor(private http: HttpClient) {
  }

  responses() {
    return this.http.get(environment.host + "/responses")
  }
}
