import { Component,ViewChild, ElementRef,Input } from '@angular/core';
import {  Router } from '@angular/router';
import { Iproduct } from '../interface/Iproduct';

import { CartService } from '../service/cart.service';



import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';
import { CounterService } from '../service/count.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  editSellerForm!: FormGroup;
  @ViewChild('editSellerModal')editSellerModal!: ElementRef;
  @Input() seller !: Iproduct;
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
    this.editSellerForm = this.formBuilder.group({
      sellerName: ['',Validators.required],
      petType: ['',Validators.required],
      petGender: ['',Validators.required],
      petPic: ['',Validators.required],
    });
  }
  
  get_imagepath(event: any){
    const file=event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
  this.base64=reader.result
  }
  }
  openEditSellerModal(seller: any) {
    this.editSellerModal.nativeElement.style.display = 'block';
  
    this.base64=seller.pet_pic
    // this.editSellerForm.get('sellerName')?.setValue(seller.Seller);
    // this.editSellerForm.get('petType')?.setValue(seller.pet_type);
    // this.editSellerForm.get('petGender')?.setValue(seller.pet_gender);
    // this.editSellerForm.get('imge')?.setValue(seller.pet_pic)
    // this.editSellerForm.get('petPic')?.setValue(seller.pet_pic);
    this.editSellerForm.patchValue({
      sellerName: seller.Seller,
      petType: seller.pet_type,
      petGender: seller.pet_gender,
      // imge: seller.pet_pic,
     
    });
  }
  
  closeEditSellerModal(){
    this.editSellerModal.nativeElement.style.display = 'none';
  }
  onSubmit() {
    if (this.editSellerForm.valid) {
      const formData = this.editSellerForm.value;
      console.log(formData);
  
      // Update the data using the API service
      this.apiService.updateProduct(this.seller.id.toString(), formData).subscribe(
        (response) => {
         
          console.log('Data updated successfully:', response);
  
         
          this.closeEditSellerModal();
        },
        (error) => {
         
          console.error('Error updating data:', error);
        }
      );
    }
  }
  deleteProduct(product_id: number) {
   
    const product_id_str = product_id.toString();
  
   
    this.apiService.deleteProduct(product_id_str).subscribe(
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
    this.router.navigate(['cart' , item.id])
  }
}
