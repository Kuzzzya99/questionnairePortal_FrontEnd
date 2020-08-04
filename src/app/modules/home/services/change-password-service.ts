import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class ChangePasswordService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  changePassword(password: string, newPassword: string) {
    return this.http.post(
      environment.host + '/user/' +
      this.cookieService.get('userId') +
      '/change_password', {
        password,
        newPassword
      });
  }
}
