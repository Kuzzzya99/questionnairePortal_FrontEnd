import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn:"root"
})

export class EditProfileService{

  constructor(private http: HttpClient) {}

  editProfile(firstName:string,
              lastName:string,
              email:string,
              phoneNumber:string){
    return this.http.post(environment.host + "/edit_profile", {
        firstName,
        lastName,
        email,
        phoneNumber
      }
    )
  }


}
