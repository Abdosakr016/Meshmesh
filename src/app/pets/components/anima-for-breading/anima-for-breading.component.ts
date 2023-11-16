import { Component } from '@angular/core';

import {  Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { CartService } from 'src/app/cart/service/cart/cart.service';
import { Ipet } from '../../interface/Ipet';
 import { AuthService } from 'src/app/auth/components/auth.service';
@Component({
  selector: 'app-anima-for-breading',
  templateUrl: './anima-for-breading.component.html',
  styleUrls: ['./anima-for-breading.component.css']
})
export class AnimaForBreadingComponent {
  userData: any;
  pets: any;

  p:number=1;
  itemsPerPage:number=3;
 
animals: Ipet[] = [];
arryCart:any[]=[];
productInCart=false;
alertMessage=''
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
  
    
          this.categoryanimals()
        
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
  addToCart(product: any) {
    this.productInCart=this.CartService.productInCart
    this.alertMessage=this.CartService.alertMessage
    
    this.CartService.addCartArray_service(product);
    this.router.navigate(['cart']);
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

    categoryanimals() {

      this.animals = this.pets.filter((pet: any) => pet.category === "Animal For Breeding");
      if (this.animals.length > 0) {
       
        console.log("animals", this.animals);
      } else {
        console.log("No animals found.");
      }
    }

    generateImageUrl(image: string) {
      return `http://localhost:8000/storage/${image}`;
    } 
  
}
