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

  url = 'http://localhost:8081/user/'; //Backend Url to send the request on

  //Observable to create a user 
  signUp(user: User):Observable<any> {
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post < any > (this.url, JSON.stringify(user), {
      'headers': headers
    });
  }

  //Observable for login 
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

  //Function to set parameters
  setLocalStorage(responseObj) {
    const expiresAt = moment().add(responseObj.expiresIn);
    localStorage.setItem('id_token', responseObj.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  //Logout function to remove items from localStorage
  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(['']);
  }

  //Function to check if user is logged in or not
  public isLoggedIn() {
    return moment().isAfter(this.getExpiration());

  }

  //Function to check if user is logged out or not
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  //Function to check the status of token
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
