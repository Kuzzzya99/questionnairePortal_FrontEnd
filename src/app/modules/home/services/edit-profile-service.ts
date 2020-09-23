import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class EditProfileService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  editProfile(firstName: string,
              lastName: string,
              phoneNumber: string) {
    return this.http.post(environment.host + '/user/' +
      this.cookieService.get('userId') +
      '/edit_profile', {
        firstName,
        lastName,
        phoneNumber
      }
    )
  }

  getUserProfileInfo() {
    return this.http.get(environment.host + '/user/' +
      this.cookieService.get('userId') +
      '/edit_profile');
  }


}
