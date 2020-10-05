import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CookieService} from "ngx-cookie-service";
import {CommentModel} from "../../../model/CommentModel";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }


  // sendComment(comment: CommentModel) {
  //   let param = new HttpParams().set("userId", this.cookieService.get("userId"));
  //   return this.http.post(environment.host + "/member/join")
  // }


  sendComment(userId, comment, fileId) {
    return this.http.post(environment.host + "/member/comment", {userId, comment, fileId})
  }
}
