import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn:"root"
})

export class ChangePasswordService{

  constructor(private http: HttpClient) {
  }

  changePassword(password:string, newPassword:string){
    return this.http.post(environment.host + "/change_password", {
      password,
      newPassword
    })
  }
}
