import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Answer} from "../../../model/Answer";
import {of} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class ResponsesMockService {
  private arr: Answer[] = [
    new Answer(1, "Kuzmich"),
    new Answer(2, "testmail@gmail.com"),
    new Answer(1, "Sukhoy"),

  ]

  constructor(private http: HttpClient) {
  }

  responses() {
    return of(this.arr)
  }
}
