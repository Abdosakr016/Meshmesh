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
  registerclinc!:FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder , private router: Router,
    private AuthService:AuthService) {




  }
  ngOnInit(){ this.registerclinc= this.fb.group({
  name: [
    '',
    [
      Validators.required,
      Validators.minLength(2),
     
      
    ],
  ],
  email: [
    '',
    [
      Validators.required,
      // Validators.email,

      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ],
  ],

  // username: [
  //   '',
  //   [Validators.required,
  //   Validators.pattern(/^\S*$/)
  // ],
  // ],
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
});}
submitForm() {
  if (this.registerclinc.valid) {
    // console.log(this.registerclinc);

    const owerData = this.registerclinc.value;
    owerData.role = "owner";

    this.AuthService.signUp(owerData).subscribe(
      (res) => {
        // console.log(res);
        // debugger
        this.router.navigate(['create_veterinary']);
      },
      (error) => {
        this.error = error.error.message;
        console.log(error.error);
      }
    );
  }
}


}









