import { Component } from '@angular/core';


import {  Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { CartService } from 'src/app/cart/service/cart/cart.service';
import { Ipet } from '../../interface/Ipet';
 import { AuthService } from 'src/app/auth/components/auth.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  userData: any;
  pets: any;

  p:number=1;
  itemsPerPage:number=3;
 
dogs: Ipet[] = [];
  constructor(private router : Router,
    private formBuilder: FormBuilder,
    private apiService: ApiServiceService ,
    private CartService : CartService,
    private userService:AuthService,
    ){}

  ngOnInit(): void {

    
      // Load the data asynchronously
      this.apiService.getProductList().subscribe(
        (data) => {
          this.pets = data;
  
    
          this.categorydogs()
        
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('COMPLETE');
        }
      );
         
      this.getAuthUser();

  }

  getAuthUser(){
    this.userService.getUserData().subscribe(
      (data) => {
        this.userData = data;
        console.log(data); 
  
      },
      (error) => {
        console.error(error);
      }
    );}

    categorydogs() {

      this.dogs = this.pets.filter((pet: any) => pet.category === "Dogs");
      if (this.dogs.length > 0) {
       
        console.log("dogs", this.dogs);
      } else {
        console.log("No dogs found.");
      }
    }

    generateImageUrl(image: string) {
      return `http://localhost:8000/storage/${image}`;
    } 
  
}
