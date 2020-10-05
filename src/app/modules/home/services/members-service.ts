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
    let param = new HttpParams();
      param = param.set("userId", this.cookieService.get("userId"));
    param = param.set("role", role);
    return this.http.post(environment.host + "/member/join", {}, {params: param})
  }

  riseHand() {
    let param = new HttpParams().set("userId", this.cookieService.get("userId"));
    return this.http.post(environment.host + "/member/raise_hand", {}, {params:param})
  }

  leave() {
    let param = new HttpParams().set("userId", this.cookieService.get("userId"));
    return this.http.delete(environment.host + "/member/leave", {params:param})
  }

  deleteMember(userId) {
    let param = new HttpParams().set("userId", userId);
    return this.http.delete(environment.host + "/member/leave", {params:param})
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

  delete(fileId) {
    let param = new HttpParams().set("fileId", fileId)
    return this.http.delete(environment.host + "/member/delete", {params: param})
  }

  getComments(fileId){
    let param = new HttpParams().set("fileId", fileId);
    return this.http.get(environment.host + "/member/comment", {params:param})
  }

  getAccessUsers(){
    return this.http.get(environment.host + "/user")
  }

  rate(fileId, rate){
    return this.http.post(environment.host + "/member/rate", {fileId, rate} )
  }
}
