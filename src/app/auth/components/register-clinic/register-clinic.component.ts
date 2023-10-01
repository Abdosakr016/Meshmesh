import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 import { Router } from '@angular/router';
  
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,

} from '@angular/forms';
@Component({
  selector: 'app-register-clinic',
  templateUrl: './register-clinic.component.html',
  styleUrls: ['./register-clinic.component.css']
})
export class RegisterClinicComponent {









  static EGYPT_CITIES: string[] = ['Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan', 'Hurghada'];

  cities: string[] = [];
  registerclinc: FormGroup;
  
  
  constructor(private fb: FormBuilder , private router: Router) {
    
    
    
    this.registerclinc= this.fb.group({
      Name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^\S+$/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,

          //Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
        ],
      ],

      
      password: [
        '', 
        [
        Validators.required,
        Validators.minLength(8),
      ],
    ],
    phone: [
      '', 
      [
        Validators.required,
        Validators.minLength(11),
        Validators.pattern(/^0[0-9]{10}$/)  // Validate for 11 digits starting with '0'
      ],
    ],
    location: [
      '',
      [
        Validators.required
      ]
    ],
    upload : [
      '',
      [
        Validators.required
      ]
    ],
    });
    this.cities = RegisterClinicComponent.EGYPT_CITIES;
  }

  submitForm() {

   console.log(this.registerclinc);

   if (!this.registerclinc.invalid) {
     const arr = localStorage.getItem('userArr');  // Corrected key name
   
     if (arr) {
       const userArr = JSON.parse(arr);
       userArr.push(this.registerclinc.value); 
       localStorage.setItem('userArr', JSON.stringify(userArr));
     } else {
       const userArr = [this.registerclinc.value];
       localStorage.setItem('userArr', JSON.stringify(userArr));
     }
   }
   
  
    this.router.navigate(['/create_veterinary']);
  }
  
}
    








