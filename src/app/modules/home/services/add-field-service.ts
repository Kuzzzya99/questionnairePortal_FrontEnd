import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class AddFieldService {

  constructor(private http: HttpClient) {
  }

  addField(label: string,
           type: number,
           options: string[],
           required: boolean,
           active: boolean,
           userId: string) {
    return this.http.post(environment.host + '/fields', {
        label,
        type,
        options,
        required,
        active,
        userId
      }
    )
  }
}
