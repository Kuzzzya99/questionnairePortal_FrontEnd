import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post(environment.host + "/auth", {
        login: email,
        password
      }
    );
  }

}

