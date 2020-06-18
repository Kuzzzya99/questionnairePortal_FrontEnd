import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginMockService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return of("Login success");}

}
