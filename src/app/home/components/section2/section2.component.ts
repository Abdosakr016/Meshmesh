import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {
  Allfeedbacks: any
  constructor(
    private feedbackService:HomeService,
    ) { } 
  
  ngOnInit() {
    this.getAllFeedbacks();
  }

  getAllFeedbacks() {
    this.feedbackService.getAllFeedbacks().subscribe(
      (data) => {
        this.Allfeedbacks = data;
        console.log(data); // You can replace this with how you want to use the data.
      },
      (error) => {
        console.error('An error occurred while fetching feedbacks:', error);
      }
    );
  }
}
