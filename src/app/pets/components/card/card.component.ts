import { Component,ViewChild, ElementRef,Input } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/cart/service/counter/count.service';
import { ApiServiceService } from '../../services/api-service.service';
import { CartService } from 'src/app/cart/service/cart/cart.service';
import { Ipet } from '../../interface/Ipet';
import { AuthService } from 'src/app/auth/components/auth.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  editPetForm!: FormGroup;
  @Input() pet !: Ipet;
  imageFile: any
  base64: any
  userData: any
  pets: any;
  AcategoryCats_adopt: Ipet[] = [];
  AcategoryCats_sell: Ipet[] = [];
  AcategoryBirds_adopt: Ipet[] = [];
  AcategoryBirds_sell: Ipet[] = [];
  AcategoryDogs_adopt: Ipet[] = [];
  AcategoryDogs_sell: Ipet[] = [];
  AcategoryAnimal_breeding: Ipet[] = [];
  AcategoryAnimal_sell: Ipet[] = [];
  // @ViewChild('editPetModal')editPetModal!: ElementRef;
  count ! : number ;
  constructor(private router : Router,
    private formBuilder: FormBuilder,
    private apiService: ApiServiceService ,
    private CartService : CartService,
    private counter : CounterService,
    private userService:AuthService
    ){}

 

    ngOnInit() {
      this.counter.getCounterVal().subscribe(val => this.count = val);
    
      // Load the data asynchronously
      this.apiService.getProductList().subscribe(
        (data) => {
          this.pets = data;
          console.log(this.pets);
    
          // Apply category filters after data has been loaded
          //* for cats
          this.category(this.AcategoryCats_adopt,"Cats","adopt")
          this.category(this.AcategoryCats_sell,"Cats","sell")
          //* for DOGS
          this.category(this.AcategoryDogs_adopt,"Dogs","adopt")
          this.category(this.AcategoryDogs_sell,"Dogs","sell")
             //* for Birds
             this.category(this.AcategoryBirds_adopt,"Birds","adopt")
             this.category(this.AcategoryBirds_sell,"Birds","sell")
             this.categoryAnimal_breeding()
          console.log("****************************")
        
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('COMPLETE');
        }
      );
    
      this.validation();
      this.getAuthUser();
    }
    
  validation(){
    this.editPetForm = this.formBuilder.group({
      owner: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', Validators.required],
      type: ['', Validators.required],
     category: ['', Validators.required],
   
      gender: ['', Validators.required],
      price: ['', Validators.required],
      operation: ['', Validators.required],
      image: ['', Validators.required],
      user_id: ['', Validators.required],
       });
  }
  generateImageUrl(image: string) {
    return `http://localhost:8000/storage/${image}`;
  } 
  get_imagPet(event: any) {
    const file = event.target.files[0];
    this.imageFile=event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      // Convert the image to base64
      const base64Image = reader.result as string;
      // Store the base64 data in a variable, but don't set it as the input value
      this.base64 = base64Image;
    };
  
    reader.readAsDataURL(file);
  }
  editFun(pet: any) {
    // this.editPetModal.nativeElement.style.display = 'block';
  console.log(pet)
    this.base64=pet.image
    this.editPetForm.patchValue({
    age: pet.age,
    category: pet.category,
    type: pet.type,
    gender: pet.gender,
    price: pet.price,
    operation: pet.operation,
    });
  }
  
  // closeeditPetModal(){
  //   this.editPetModal.nativeElement.style.display = 'none';
  // }
  onUpdate() {
    if (this.editPetForm.valid) {
      const petData = this.editPetForm.value;
   
      petData.user_id = this.userData.id;
  
      const formData = new FormData();
  
      formData.append('image', this.imageFile);
  
      for (const key of Object.keys(petData)) {
        formData.append(key, petData[key]);
      }
  
      this.apiService.updatePet(this.pet.id.toString(), formData).subscribe(
        (response) => {
         
          console.log('Data updated successfully:', response);
          console.log(this.pet.id);
          console.log(formData);
  
         
          // this.closeeditPetModal();
        },
        (error) => {
         
          console.error('Error updating data:', error);
        }
      );
    }
  }
  deleteProduct(pet_id: number) {
   
    const pet_id_str = pet_id.toString();
  
   
    this.apiService.deleteProduct(pet_id_str).subscribe(
      (response) => {
        console.log('Product deleted successfully:', response);
  
 
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
  AddToCart(item : any){
    this.CartService.addItem(item);
    this.counter.setCartValue(++this.count)
    this.router.navigate(['cart' , item])
  }
  submitForm() {
    console.log(this.editPetForm);
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
    category(Acategory: Ipet[], categoryType: string, operation: string) {
      Acategory = this.pets.filter((pet: any) => pet.category === `${categoryType}` && pet.operation == `${operation}`);
      if (Acategory.length > 0) {
        console.log(Acategory);
        // Assign the filtered data to the appropriate property
        if (categoryType === "Cats" && operation === "adopt") {
          this.AcategoryCats_adopt = Acategory;
        } else if (categoryType === "Cats" && operation === "sell") {
          this.AcategoryCats_sell = Acategory;
        } else if (categoryType === "Dogs" && operation === "adopt") {
          this.AcategoryDogs_adopt = Acategory;
        } else if (categoryType === "Dogs" && operation === "sell") {
          this.AcategoryDogs_sell = Acategory;
        } else if (categoryType === "Birds" && operation === "adopt") {
          this.AcategoryBirds_adopt = Acategory;
        } else if (categoryType === "Birds" && operation === "sell") {
          this.AcategoryBirds_sell = Acategory;
        }
      } else {
        console.log(`no ${categoryType} found`);
      }
    }
    
  //  category(Acategory:  Ipet[],categoryType:string,operation: string) {
  //     Acategory = this.pets.filter((pet: any) => pet.category === `${categoryType}`&&pet.operation==`${operation}`);
  //     if (Acategory.length > 0) {
  //       console.log( Acategory);
  //     } else {
  //       console.log(`no ${categoryType} found` );
  //     }
  //   }
   


categoryAnimal_breeding() {
  this.AcategoryAnimal_breeding = this.pets.filter((pet: any) => pet.category === "Animal For Breeding");
  if (this.AcategoryAnimal_breeding.length > 0) {
    console.log("AcategoryAnimal_breeding", this.AcategoryAnimal_breeding);
  } else {
    console.log("No Animal For Breeding found.");
  }
}

}