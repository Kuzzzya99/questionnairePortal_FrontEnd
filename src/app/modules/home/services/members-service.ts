import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: "root"
})

export class MembersService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  findAllMembers() {
    return this.http.get(environment.host + "/member")
  }

  join(role) {
    let param = new HttpParams().set("userId", this.cookieService.get("userId"));
    return this.http.post(environment.host + "/member/join", {role}, {params: param})
  }

  riseHand() {
    return this.http.post(environment.host + "/member/raise_hand", {userId: this.cookieService.get("userId")})
  }

  leave() {
    return this.http.post(environment.host + "/member/leave", {userId: this.cookieService.get("userId")})
  }

  deleteMember(userId) {
    return this.http.post(environment.host + "/member/leave", {userId})
  }

  list() {
    return this.http.get(environment.host + "/member/list")
  }

  upload(file) {
    console.log(file);
    let testData = new FormData();
    testData.append('file', file, file.name);
    testData.append('userId', this.cookieService.get('userId'))

    return this.http.post(environment.host + "/member/upload", testData, {
      reportProgress: true,
      responseType: 'text'
    })
  }

  download(fileName) {
    let param = new HttpParams().set("fileName", fileName)
    return this.http.get(environment.host + "/member/download", {params: param})
  }

  delete(fileName) {
    let param = new HttpParams().set("fileName", fileName)
    return this.http.get(environment.host + "/member/delete", {params: param})
  }

}
