import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http: HttpClient) {
  }

  sendComment(userId, comment, fileId) {
    return this.http.post(environment.host + "/member/comment", {userId, comment, fileId})
  }
}
