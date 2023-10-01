import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creat-list-doctors',
  templateUrl: './creat-list-doctors.component.html',
  styleUrls: ['./creat-list-doctors.component.css']
})
export class CreatListDoctorsComponent {
  
  doctorForm!: FormGroup;
  doctorsFormArray: any
  i=5;
  onSubmit(){}

}
