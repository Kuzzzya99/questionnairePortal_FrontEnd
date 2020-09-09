import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class EditFieldService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  editField(label: string,
            type: number,
            options: string[],
            required: boolean,
            active: boolean,
            userId: string) {
    return this.http.put(environment.host + '/fields/' + this.cookieService.get('fieldId') + '/edit', {
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
