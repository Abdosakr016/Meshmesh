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
  ReactiveFormsModule
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regiseruser: FormGroup;
   arrUsers:string[]=[];
  constructor(private fb: FormBuilder , private router: Router) {
    
  
    this.regiseruser= this.fb.group({
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
    });
  }

  submitForm() {
    console.log(this.regiseruser);
   
    if (!this.regiseruser.invalid) {
      const arr = localStorage.getItem('userArr');  // Corrected key name
    
      if (arr) {
        const userArr = JSON.parse(arr);
        userArr.push(this.regiseruser.value);
        localStorage.setItem('userArr', JSON.stringify(userArr));
      } else {
        const userArr = [this.regiseruser.value];
        localStorage.setItem('userArr', JSON.stringify(userArr));
      }
    }
    
    
      this.router.navigate(['/login']);
  }
  

    
  }
 
