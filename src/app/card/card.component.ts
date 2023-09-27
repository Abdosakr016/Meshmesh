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
  
  openEditSellerModal(seller: any) {
    this.editSellerModal.nativeElement.style.display = 'block';
  }
  closeEditSellerModal(){
    this.editSellerModal.nativeElement.style.display = 'none';
  }
  
}
