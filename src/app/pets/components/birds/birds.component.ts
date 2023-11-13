import { Component } from '@angular/core';


import {  Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/cart/service/counter/count.service';
import { ApiServiceService } from '../../services/api-service.service';
import { CartService } from 'src/app/cart/service/cart/cart.service';
import { Ipet } from '../../interface/Ipet';
 import { AuthService } from 'src/app/auth/components/auth.service';
import { SharedService } from '../../services/shared service/shared.service';
@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent {
  userData: any;
  pets: any;

  p:number=1;
  itemsPerPage:number=3;
  pet = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
  ]


  count ! : number ;
  constructor(private router : Router,
    private formBuilder: FormBuilder,
    private apiService: ApiServiceService ,
    private CartService : CartService,
    private counter : CounterService,
    private userService:AuthService,
    private SharedService:SharedService,
    ){}

  ngOnInit(): void {

    this.pets = this.pet
    this.counter.getCounterVal().subscribe(val => this.count = val);
    
      // Load the data asynchronously
      this.apiService.getProductList().subscribe(
        (data) => {
          this.pets = data;
          console.log(this.pets);
    
          // Apply category filters after data has been loaded
          //* for cat
        
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
}
