import {
  Component,
  OnInit
} from '@angular/core';
import {
  UserService
} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn ? : boolean;

  constructor(private userService: UserService) {}

  //Check if user is Logged in or not
  //If user is logged in, enable logout else enable login
  checkStatus() {
    console.log(this.userService.isLoggedIn());
    if (this.userService.isLoggedIn()) {
      this.loggedIn = true;
      console.log(this.loggedIn);
    }
    if (this.userService.isLoggedOut()) {
      this.loggedIn = undefined;
    }
  }

  //On logout, call logout from user service and refresh the page
  logout() {
    this.userService.logout();
    location.reload(true);
  }

  ngOnInit(): void {
    //Everytime component loads, first check status of the user
    this.checkStatus();

  }

}
