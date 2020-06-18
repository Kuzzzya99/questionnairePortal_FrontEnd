import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {of} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class EditProfileMockService{

  constructor(private http: HttpClient) {}

  editProfile(firstName:string,
              lastName:string,
              email:string,
              phoneNumber:string){
    return of("profileedit");
  }


}
