import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
  
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
  registerclinc: FormGroup;
  error: string = '';
  
  constructor(private fb: FormBuilder , private router: Router,
    private AuthService:AuthService) {
    
    
    
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

    });
  
  }

  submitForm() {

    console.log(this.registerclinc);

   if (!this.registerclinc.invalid) {
    const ownerData = this.registerclinc.value;
    ownerData.role = "owner"
  
    this.AuthService.signUp(ownerData).subscribe(res => {
      console.log(res);
      console.log(ownerData);
      this.router.navigate(['login']);
    },
    error => {
      this.error=error.error.message;
      console.log(error.error);
    });
   }
   
  
    this.router.navigate(['/create_veterinary']);
  }
  
}
    








