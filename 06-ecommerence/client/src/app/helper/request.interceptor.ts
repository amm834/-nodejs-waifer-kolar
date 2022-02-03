import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Storage} from "./Storage";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = `Bearer ${Storage.token}`
    const authReq = req.clone({setHeaders: {Authorization: authToken}});

    return next.handle(authReq)
  }


}
