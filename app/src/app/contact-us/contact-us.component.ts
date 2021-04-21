import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() {}

  //Form binding with html
  contactForm = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z\s]+$")]),
    userEmail: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    comment: new FormControl("", Validators.required)
  })

  ngOnInit(): void {}

  //On successful validation Display message
  onSubmit():void{ 
    alert("Thank you for reaching out to us. We will reach out to you shortly");
  }

}
