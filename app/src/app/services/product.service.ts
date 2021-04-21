//import dependencies
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

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };//variable to pass the http options

  url = 'http://localhost:8081/user/product'; //Backend Url to send the request on

  //Observable to get all available products from the backend
  getProducts(): Observable < Response > {
    return this.http.get < Response > (this.url, this.httpOptions);
  }

  //Observable to get product with specified product id
  getProduct(id): Observable < Response > {
    const newUrl = `${this.url}/${id}`;
    return this.http.get < Response > (newUrl, this.httpOptions);
  }

}
