//Import required modules
import {
  Component,
  OnInit
} from '@angular/core';
import {
  User
} from '../user';
import {
  UserService
} from '../services/user.service';
import {
  Router
} from '@angular/router';
import {
  HttpErrorResponse
} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Create a user with default values
  user ? : User = {
    name: '',
    email: '',
    password: ''
  };
  constructor(private userService: UserService, private router: Router) {}

  //Check if user is already logged in or not
  checkStatus() {
    if (localStorage.getItem('id_token')) {
      this.router.navigate(['']);
    }
  }

  //If user requests for login, Validate the request
  //If valid data, send login request
  login() {
    var email = ( < HTMLInputElement > document.getElementById("email")).value;
    var password = ( < HTMLInputElement > document.getElementById("password")).value;

    //Email Validations
    //If email is null 
    if (email == "") {
      document.getElementById("loginEmailError").innerHTML = "Email cannot be empty";
      return false;
    }
    //If email is not in proper format
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      document.getElementById("loginEmailError").innerHTML = "Invalid Email";
      return false;
    }
    document.getElementById("loginEmailError").innerHTML = "";

    //Password Validations
    //Password should not be empty
    if (password == "") {
      document.getElementById("loginPasswordError").innerHTML = "Password cannot be empty";
      return false;
    }
    var patt = /[A-Z]{1,}[a-z]{1,}[$,#,@][0-9]/g
    if (!password.match(patt)) {
      var msg = "Invalid Password";
      document.getElementById("loginPasswordError").innerHTML = msg;
      return false;
    }
    document.getElementById("loginPasswordError").innerHTML = "";

    this.userService.login(email, password).subscribe(res => {
        this.userService.setLocalStorage(res);
        location.reload(true);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          // Handle error
          if (err.status === 401) {
            document.getElementById("loginPasswordError").innerHTML = "Invalid Username/Password";
            return false;
          } else {
            document.getElementById("loginPasswordError").innerHTML = "Invalid Username/Password";
            return false;
          }
        }
        document.getElementById("loginEmailError").innerHTML = "";
        document.getElementById("loginPasswordError").innerHTML = "";
      }

    );
  }

  signUp() {
    var name = ( < HTMLInputElement > document.getElementById("userName")).value;
    var email = ( < HTMLInputElement > document.getElementById("userEmail")).value;
    var password = ( < HTMLInputElement > document.getElementById("userPassword")).value;
    var validationError=0;

    //Name Validations
    if (name == "") {
      document.getElementById("nameError").innerHTML = "Name cannot be empty";
      validationError=1;
    }
    if (!name.match(/[A-za-z]+$/) && name != "") {
      document.getElementById("nameError").innerHTML = "Name should consists of only characters";
      validationError=1;
    }
    if(validationError==0){
      document.getElementById("nameError").innerHTML = "";
    }

    //Email Validations
    if (email == "") {
      document.getElementById("emailError").innerHTML = "Email cannot be empty";
      validationError=1;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && email !="") {
      document.getElementById("emailError").innerHTML = "Invalid Email";
      validationError=1;
    }
    if(validationError==0){
      document.getElementById("emailError").innerHTML = "";
    }
    

    //Password Validations
    if (password == "") {
      document.getElementById("passwordError").innerHTML = "Password cannot be empty";
      validationError=1;
    }
    var patt = /[A-Z]{1,}[a-z]{1,}[$,#,@][0-9]/g
    if (!password.match(patt) && password != "") {
      var msg = "Password should contain atleast one capital letter followed by atleast one small letter followed by special character and digits";
      document.getElementById("passwordError").innerHTML = msg;
      validationError=1;
    }
    if(validationError==1){
      return false;
    }
    document.getElementById("passwordError").innerHTML = "";

    this.user.name = name;
    this.user.email = email;
    this.user.password = password;
    this.userService.signUp(this.user).subscribe((res: any) => {
        console.log(res);
        document.getElementById("signUpSuccess").innerHTML = res.message;
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          // Handle error
          if (err.error.message === "User already exists") {
            document.getElementById("signUpFail").innerHTML = err.error.message;
          }
        }
      });
  }

  ngOnInit(): void {
    this.checkStatus();
  }

}
