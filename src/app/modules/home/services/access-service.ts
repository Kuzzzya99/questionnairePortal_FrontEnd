import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CookieService} from "ngx-cookie-service";
import {CommentModel} from "../../../model/CommentModel";

@Injectable({
  providedIn: 'root'
})

export class AccessService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  // sendComment(userId, comment, fileId) {
  //   return this.http.post(environment.host + "/member/comment", {userId, comment, fileId})
  // }
  sendNewAccess(userIds: string[], fileId: number) {
    return this.http.post(environment.host + "/member/give_access", {userIds, fileId})
  }
}
