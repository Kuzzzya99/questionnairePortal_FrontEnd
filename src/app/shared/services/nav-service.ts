import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class NavService {
  private tokenId = this.cookieService.get('tokenId');

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getUsername() {
    return this.http.get(environment.host + '/user/' + this.cookieService.get('userId'));
  }

  logOut() {
    return this.http.post(environment.host + '/user/' + this.cookieService.get('userId') + '/logout', this.tokenId)
  }
}
