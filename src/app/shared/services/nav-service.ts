import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NavService {

  constructor(private http: HttpClient) {
  }

  getUsername() {
    return this.http.get(environment.host + '/user/' + localStorage.getItem("userId"));
  }
}
