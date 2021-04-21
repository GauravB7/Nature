import {
  Injectable
} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

    const idToken = localStorage.getItem("id_token"); //get id_token stored in localStorage of the client's browser

    //if token is available
    //add that token to every header for http request made to backend
    if (idToken) {

      const cloned = req.clone({
        headers: req.headers.set("Authorization", idToken)
      });

      return next.handle(cloned);

    } else {
      //if token is not available, send the request as it is
      return next.handle(req);

    }

  }

}
