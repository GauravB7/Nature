import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() {}

  feedbackForm = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z\s]+$")]),
    userEmail: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    comment: new FormControl("", Validators.required)
  })

  ngOnInit(): void {}

  onFeedback():void{
    alert("Your feedback has been recorded. This will help us improve overall experience for you. Thank You");
  }

}
