import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { SuppliesService } from '../../services/supplies.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/components/auth.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {
  allSupplies: any;
  imageFile: any;
  supplyBase64: any;
  addSupplyForm!:FormGroup;
  userData: any;

  constructor(private renderer: Renderer2,private fb: FormBuilder, 
    private el: ElementRef,private suppliesService:SuppliesService, 
    private userService:AuthService) {}

  ngOnInit(): void {


    this.handelGrid()
 
    this.getAllSuppliesData();
   this. initializesupplyForm();
   this.getAuthUser();
  }

  initializesupplyForm() {
    this.addSupplyForm= this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      image: ['', Validators.required],
      category:['', Validators.required],
      is_available:['', Validators.required],
      // user_id: ['', Validators.required],

    });
  }



  getAllSuppliesData() {
    this.suppliesService.getAllSupplies().subscribe((data) => {
      this.allSupplies=data
      console.log(data); // You can replace this with how you want to use the data.
    });
  }



  get_supplyImagepath(event: any) {
    const file = event.target.files[0];
    this.imageFile = event.target.files[0];
    const reader = new FileReader();
    // reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result as string;
      this. supplyBase64 = base64Image;
     
    };
    reader.readAsDataURL(file);
  }

  onAddDoctor() {
    if (this.addSupplyForm.valid) {
      const doctorData = this.addSupplyForm.value;
      doctorData.user_id = this.userData.id;
      const formData = new FormData();
      formData.append('image', this.imageFile);

      for (const key of Object.keys(doctorData)) {
        formData.append(key, doctorData[key]);
      }

      // Update the data using the API service
      this.suppliesService.addNewSupply(formData).subscribe(

        (response) => {

          console.log('Data updated successfully:', response);
        
        },
        (error: any) => {
          console.error('Error updating data:', error);
        }
      );

    }

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


  handelGrid(){
    const listButton = this.el.nativeElement.querySelector('#list');
    const gridButton = this.el.nativeElement.querySelector('#grid');
    const productItems = this.el.nativeElement.querySelectorAll('#products .item');

    if (listButton && gridButton) {
      listButton.addEventListener('click', (event: Event) => { // Specify Event type
        event.preventDefault();
        productItems.forEach((item: HTMLElement) => { // Specify HTMLElement type
          this.renderer.addClass(item, 'list-group-item');
          this.renderer.removeClass(item, 'grid-group-item');
        });
      });

      gridButton.addEventListener('click', (event: Event) => { // Specify Event type
        event.preventDefault();
        productItems.forEach((item: HTMLElement) => { // Specify HTMLElement type
          this.renderer.removeClass(item, 'list-group-item');
          this.renderer.addClass(item, 'grid-group-item');
        });
      });
    }
  }
}
