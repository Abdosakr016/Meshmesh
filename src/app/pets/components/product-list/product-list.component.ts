import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/components/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  addPetForm!: FormGroup;
  petAddBase64: any;
  pets: any;
  imageFile: any;
  userData: any;
  @ViewChild('addPetModal')
  addPetModal!: ElementRef;
  constructor(private formBuilder: FormBuilder,
     private apiService: ApiServiceService,
     private userService:AuthService) {}

  ngOnInit() {
    // this.apiService.getProductList().subscribe(
    //   (data) => {
    //     this.pets = data;
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('COMPLETE');
    //   }
    // );

    this.validation();
    this.getAuthUser()
    this.validation();
  }


  validation(){
    this.addPetForm = this.formBuilder.group({
      age: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      gender: ['', Validators.required],
      price: ['', Validators.required],
      operation: ['', Validators.required],
      image: ['', Validators.required],
      // user_id: ['', Validators.required],
      // category_id: ['', Validators.required],
    });
  }
  get_imagPet(event: any) {
    const file = event.target.files[0];
    this.imageFile=event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      // Convert the image to base64
      const base64Image = reader.result as string;
      // Store the base64 data in a variable, but don't set it as the input value
      this.petAddBase64 = base64Image;
    };
  
    reader.readAsDataURL(file);
  }
  

  onAddPet() {
    if (this.addPetForm.valid) {
      const petData = this.addPetForm.value;
    
      petData.user_id = this.userData.id;
  
      const formData = new FormData();
  
      formData.append('image', this.imageFile);
  
      for (const key of Object.keys(petData)) {
        formData.append(key, petData[key]);
      }
      console.log(formData);
  
      // Update the data using the API service
      this.apiService.addNewPet(formData).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
        },
        (error: any) => {
          console.error('Error added data:', error);
        }
      );
    }
  }
  

  submitForm() {
    console.log(this.addPetForm);
  }

getAuthUser(){
  this.userService.getUserData().subscribe(
    (data) => {
      this.userData = data;
      // console.log(data); 

    },
    (error) => {
      console.error(error);
    }
  );}
}
