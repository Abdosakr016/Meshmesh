import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../interface/seller';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  editSellerForm!: FormGroup;
  @ViewChild('editSellerModal')
  editSellerModal!: ElementRef;
  @Input() seller !: Seller;
  base64: any
  constructor(private router : Router,private formBuilder: FormBuilder){}
  ngOnInit() {
    this.editSellerForm = this.formBuilder.group({
      sellerName: ['',Validators.required],
      petType: ['',Validators.required],
      petGender: ['',Validators.required],
      petPic: ['',Validators.required],
    });
  }
  onSubmit() {
    if (this.editSellerForm.valid) {
      // Form is valid, perform the submission logic here
      const formData = this.editSellerForm.value;
      console.log(formData);
  
      // Close the modal
      this.closeEditSellerModal();
    }
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
    // this.editSellerForm.get('image')?.setValue(seller.pet_pic)
    // this.editSellerForm.get('petPic')?.setValue(seller.pet_pic);
    this.editSellerForm.patchValue({
      sellerName: seller.Seller,
      petType: seller.pet_type,
      petGender: seller.pet_gender,
      image: seller.pet_pic,
     
    });
  }
  
  closeEditSellerModal(){
    this.editSellerModal.nativeElement.style.display = 'none';
  }
  

}
