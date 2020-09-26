import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {CookieService} from "ngx-cookie-service";
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: "root"
})

export class QuestionnaireFormService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    this.initializeWebSocketConnection();
}

  public stompClient;
  public msg = [];

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8087/ws';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/topic', (message) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(response) {
    let param = new HttpParams().set("userId", this.cookieService.get("userId"));
    this.stompClient.send('app/responses/add' , {params: param}, response);
  }

  getFields() {
    let param = new HttpParams().set("userId", this.cookieService.get("userId"));
    return this.http.get(environment.host + "/responses/form", {params: param})
  }

  // addResponse(response) {
  //   response = new Object(response);
  //   return this.http.post(environment.host + "/responses/add", {response}, {params: param})
  // }
}
