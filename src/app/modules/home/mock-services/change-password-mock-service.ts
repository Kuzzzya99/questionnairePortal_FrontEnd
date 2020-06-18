import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Answer} from "../../../model/Answer";
import {of} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class ChangePasswordMockService{
  private
  constructor(private http: HttpClient) {
  }

  changePassword(password:string, newPassword:string){
    return of(newPassword);
  }
}
