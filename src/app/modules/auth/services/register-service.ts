import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../../../model/User";

@Injectable({
  providedIn: "root"
})

export class RegisterService {

  constructor(private http: HttpClient) {
  }

  signUp(user: User) {
    return this.http.post(environment.host + "/registration", user)
  }
}
