import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private cookieService: CookieService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('INTERCEPTOR');
    const token = this.cookieService.get("token");
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append('Authorization', "Bearer " + token);
    }
    const authReq = req.clone({headers: newHeaders});
    return next.handle(authReq);
  }
}
