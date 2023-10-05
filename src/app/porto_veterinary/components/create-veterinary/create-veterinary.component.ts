import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { VeterinaryService } from '../../services/veterinary.service';

@Component({
  selector: 'app-create-veterinary',
  templateUrl: './create-veterinary.component.html',
  styleUrls: ['./create-veterinary.component.css']
})
export class CreateVeterinaryComponent implements OnInit  {
  vetCenterForm!: FormGroup;
  logoBase64: any;
  taxBase64:any;
  commercialBasde64:any;

  cities: string[] = ['Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan', 'Hurghada'];

  
  constructor(private formBuilder: FormBuilder,private VetService:VeterinaryService){}
  ngOnInit() {
    this.validatVetCenterForm()
  }

  
  validatVetCenterForm(){
    this.vetCenterForm = this.formBuilder.group({
      vetCenterName: ['',Validators.required],
      streetAddress: ['',Validators.required],
      city: ['',Validators.required],
      logoPhotos: ['',Validators.required],
      servicesOffered: ['',Validators.required],
      license: ['',Validators.required],
      operatingHours: ['',Validators.required],
      petsTreated: ['',Validators.required],
      servicesProvided: ['',Validators.required],
      taxRecord: ['',Validators.required],
      commercialRecord: ['',Validators.required],
     
      aboutCenter: [ '' , Validators.required  ] ,
    });
  }

 
 
  
  
  onlogo(event: any){
    const file=event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
  this.logoBase64=reader.result
  }
  }
  onTax(event: any){
    const file=event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
  this.taxBase64=reader.result
  }
  }
  onCommercial(event: any){
    const file=event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
  this.commercialBasde64=reader.result
  }
  }
  onVeterinary(){

      if (this.vetCenterForm.valid) {
        const vetData = this.vetCenterForm.value;
        console.log(vetData);
    
       
        this.VetService.addVeterinary( vetData).subscribe(
          (response: any) => {
           
            console.log('Data of veternary center Added successfully:', response);
    
       
          },
          (error: any) => {
           
            console.error('Error updating data:', error);
          }
        );
      }
  
  }
  
  
}
