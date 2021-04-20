import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Response
} from '../productResponse';
import {
  responseById
} from '../productResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  url = 'http://localhost:8081/user/product';

  getProducts(): Observable < Response > {
    return this.http.get < Response > (this.url, this.httpOptions);
  }

  getProduct(id): Observable < Response > {
    const newUrl = `${this.url}/${id}`;
    return this.http.get < Response > (newUrl, this.httpOptions);
  }

}
