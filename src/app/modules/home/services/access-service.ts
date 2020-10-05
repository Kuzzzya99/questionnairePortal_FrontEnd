import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class AccessService {

  constructor(private http: HttpClient) {
  }

  sendNewAccess(userIds: string[], fileId: number) {
    return this.http.post(environment.host + "/member/give_access", {userIds, fileId})
  }
}
