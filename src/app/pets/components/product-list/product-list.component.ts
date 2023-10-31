import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  addPetForm!: FormGroup;
  petAddBase64: any;
  pets: any;
  @ViewChild('addPetModal')
  addPetModal!: ElementRef;

  constructor(private formBuilder: FormBuilder, private apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.getProductList().subscribe(
      (data) => {
        this.pets = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('COMPLETE');
      }
    );

    this.addPetForm = this.formBuilder.group({
      // owner: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', Validators.required],
      type: ['', Validators.required],
      gender: ['', Validators.required],
      price: ['', Validators.required],
      operation: ['', Validators.required],
      image: ['', Validators.required],
    });
    // this.addPetForm.get('user_id')!.setValue(1); // Set the age to 3 as an example
    // this.addPetForm.get('category_id')!.setValue(1); // Set the age to 3 as an example

  }

  get_imagPet(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.petAddBase64 = reader.result;
    };
  }

  onAddPet() {
    if (this.addPetForm.valid) {
      const petData = this.addPetForm.value;
      console.log(petData);

      // Update the data using the API service
      this.apiService.addNewPet(petData).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
        },
        (error: any) => {
          console.error('Error updating data:', error);
        }
      );
    }
  }

  submitForm() {
    console.log(this.addPetForm);
  }
}
