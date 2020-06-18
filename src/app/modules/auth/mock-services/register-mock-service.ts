import {Injectable} from "@angular/core";
import {root} from "rxjs/internal-compatibility";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../../../model/User";
import {of} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class RegisterMockService {

  private user: User = new User("newuser@mail.com",
    "password",
    "Diana",
    "Sazanchuk",
    "375336666666")

  constructor(private http: HttpClient) {
  }

  signUp(user: User) {
    return of(user)
  }
}
