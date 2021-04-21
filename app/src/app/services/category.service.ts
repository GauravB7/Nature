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
  categoryResponse
} from '../categoryResponse';
import {
  Response
} from '../productResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }; //variable to pass the http options

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8081/user/category'; //Backend Url to send the request on

  //Create a observable to get all available product categories for the given url with the mentioned attributes
  //Upon subscribe, sends the request to the backend and pass the received response to the frontend 
  getProductCategories(): Observable < categoryResponse > {
    return this.http.get < categoryResponse > (this.url, this.httpOptions);
  }

  //Create a observable to get all avaiable products with specified category
  getProductByCategories(id): Observable < Response > {
    const newUrl = `${this.url}/${id}`;
    return this.http.get < Response > (newUrl, this.httpOptions);
  }

  //Create a observable to get the product category
  getProductCategory(id): Observable < categoryResponse > {
    const url = `http://localhost:8081/user/categoryById/${id}`;
    return this.http.get < categoryResponse > (url, this.httpOptions);
  }
}
