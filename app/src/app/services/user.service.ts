import {
  Injectable
} from '@angular/core';
import {
  User
} from '../user';
import {
  Observable
} from 'rxjs';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Router
} from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}

  user ? : User = {
    name: '',
    email: '',
    password: ''
  };

  url = 'http://localhost:8081/user/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };


  signUp(user: User) {
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post < any > (this.url, JSON.stringify(user), {
      'headers': headers
    });
  }

  login(email, password): Observable < any > {
    const headers = {
      'content-type': 'application/json'
    };
    this.user.email = email;
    this.user.password = password;
    return this.http.post < any > (this.url + "login", {
      email: this.user.email,
      password: this.user.password
    }, {
      'headers': headers
    });
  }

  setLocalStorage(responseObj) {
    const expiresAt = moment().add(responseObj.expiresIn);
    localStorage.setItem('id_token', responseObj.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(['']);
  }

  public isLoggedIn() {
    return moment().isAfter(this.getExpiration());

  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
