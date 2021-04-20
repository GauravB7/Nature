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
  };

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8081/user/category';

  getProductCategories(): Observable < categoryResponse > {
    return this.http.get < categoryResponse > (this.url, this.httpOptions);
  }

  getProductByCategories(id): Observable < Response > {
    const newUrl = `${this.url}/${id}`;
    return this.http.get < Response > (newUrl, this.httpOptions);
  }

  getProductCategory(id): Observable < categoryResponse > {
    const url = `http://localhost:8081/user/categoryById/${id}`;
    return this.http.get < categoryResponse > (url, this.httpOptions);
  }
}
