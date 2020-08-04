import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class EditProfileService {

  constructor(private http: HttpClient) {
  }

  editProfile(firstName: string,
              lastName: string,
              login: string,
              phoneNumber: string) {
    return this.http.post(environment.host + "/edit_profile", {
        firstName,
        lastName,
        login,
        phoneNumber
      }
    )
  }

  getUserProfileInfo() {
    return this.http.get(environment.host + '/edit_profile');
  }


}
