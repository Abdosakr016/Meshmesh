import { Component,ViewChild, ElementRef,Input } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CounterService } from 'src/app/cart/service/counter/count.service';
import { ApiServiceService } from '../../services/api-service.service';
import { CartService } from 'src/app/cart/service/cart/cart.service';
import { Ipet } from '../../interface/Ipet';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  editPetForm!: FormGroup;
  @Input() pet !: Ipet;
  @ViewChild('editPetModal')editPetModal!: ElementRef;
  count ! : number ;
  constructor(private router : Router,
    private formBuilder: FormBuilder,
    private apiService: ApiServiceService ,
    private CartService : CartService,
    private counter : CounterService
    ){}

 
  base64: any

  ngOnInit() {
    this.counter.getCounterVal().subscribe(val => this.count = val)
    this.editPetForm = this.formBuilder.group({
    // owner: ['', [Validators.required, Validators.minLength(2)]],
    age: ['', Validators.required],
    type: ['', Validators.required],
    gender: ['', Validators.required],
    price: ['', Validators.required],
    operation: ['', Validators.required],
    image: ['', Validators.required],
    });
  }
  generateImageUrl(imagePath: string) {
      // return `http://localhost:8000/api/images/${imagePath}`;
    }  
  get_imagepath(event: any){
    const file=event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
  this.base64=reader.result
  }
  }
  openeditPetModal(pet: any) {
    this.editPetModal.nativeElement.style.display = 'block';
  
    this.base64=pet.image
    this.editPetForm.patchValue({
    age: pet.age,
    type: pet.type,
    gender: pet.gender,
    price: pet.price,
    operation: pet.operation,
    });
  }
  
  closeeditPetModal(){
    this.editPetModal.nativeElement.style.display = 'none';
  }
  onSubmit() {
    if (this.editPetForm.valid) {
      const formData = this.editPetForm.value;
      console.log(formData);
  
      // this.apiService.updateProduct(this.pet.id.toString(), formData).subscribe(
      //   (response) => {
         
      //     console.log('Data updated successfully:', response);
  
         
        //   this.closeeditPetModal();
        // },
        // (error) => {
         
        //   console.error('Error updating data:', error);
        // }
      // );
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
}