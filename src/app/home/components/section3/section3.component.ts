import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/components/auth.service';


@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component {
  feedbackForm!: FormGroup;
  Allfeedbacks: any
  userData: any;
  constructor(
    private feedbackService:HomeService,
    private formBuilder: FormBuilder,
    private userService: AuthService,
    ) { } 
  

    ngOnInit() {
      this.validation();
      this.getAuthUser()
    }



  
  validation() {
    this.feedbackForm = this.formBuilder.group({
      feedback: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  
  sendMessage() {
    if (this.feedbackForm.valid && this.userData && this.userData.id) {
      const feedbackData = this.feedbackForm.value;
      feedbackData.user_id = this.userData.id;
  console.log(this.userData.id)
      this.feedbackService.insertFeedback(feedbackData).subscribe(
        response => {
          console.log('Feedback submitted successfully:', response);
          // Optionally, you can reset the form or perform other actions
          this.feedbackForm.reset();
        },
        error => {
          console.error('Error submitting feedback:', error);
          // Handle error as needed
        }
      );
    } else {
      console.error('Invalid form data or user data is missing.');
      // Handle the case where form data or user data is invalid or missing
    }
  }
  
  
  getAuthUser(){
    this.userService.getUserData().subscribe(
      (data) => {
        this.userData = data;
        // console.log(data); 
  
      },
      (error) => {
        console.error(error);
      }
    );}
}

