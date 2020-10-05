import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post(environment.host + "/auth", {
        login: email,
        password
      }
    );
  }


  upload(image, targetImage) {

    let testData = new FormData();
    testData.append('image', image, image.name);
    testData.append('targetImage', targetImage, targetImage.name);

    return this.http.post(environment.host + "/photoAuth", testData, {
      reportProgress: true,
      responseType: 'text'
    })
  }
}

