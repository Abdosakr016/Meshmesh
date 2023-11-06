import { Component, OnInit,NgZone } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeterinaryService } from '../../services/veterinary.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-creat-list-doctors',
  templateUrl: './creat-list-doctors.component.html',
  styleUrls: ['./creat-list-doctors.component.css']
})
export class CreatListDoctorsComponent implements OnInit {
  [x: string]: any;
  doctorForm!: FormGroup;
  doctorForms: FormGroup[] = [];
  doctorBase64:any;
  updateDoctorForm!:FormGroup;
  arrDoctors:any=[];
  getId:any;
  currentDoctor:any;
  constructor(private fb: FormBuilder,private VetService:VeterinaryService
    ,private router:Router,private activateroute:ActivatedRoute)
    {
      
      // Initialize your form group (updateDoctorForm) here
    this.updateDoctorForm = this.fb.group({
      name: [''],
      image: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }

  // Function to set the current doctor data for update
  setUpdateData(doctor: any) {
    this.currentDoctor = doctor;
    // Bind the data to the form controls
    this.updateDoctorForm.patchValue({
      name: doctor.name,
      experience: doctor.experience,
       image: doctor.image,
      // You can handle the 'image' control as needed, e.g., displaying the current image
      
    });
    
  }
  
   

  ngOnInit() {
    this.initializeDoctorForm();
    this.VetService.get_doctors().subscribe(res=>{
      console.log(Object.values(res)[0]);
      this.arrDoctors=Object.values(res)[0];
    })
  }


  initializeDoctorForm() {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      image: ['',Validators.required],
      experience: ['',Validators.required],
      
    });
  }



  get_doctorImagepath(event: any){
    const file=event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
  this.doctorBase64=reader.result
  }
  }
 
  onAddDoctor() {
    if (this.doctorForm.valid) {
      const doctorData = this.doctorForm.value;
      
      // Update the data using the API service
      this.VetService.addNewDoctor(doctorData).subscribe(

        (response) => {
         
          console.log('Data updated successfully:', response);
          
        },
        (error: any) => {
          console.error('Error updating data:', error);
        }
      );
    }
  }


  onUpdateDoctor() {
    if (this.updateDoctorForm.valid) {
      const doctorData = this.updateDoctorForm.value;
      console.log(doctorData);
  
      // Update the data using the API service
      this.VetService.updatDoctor(this.getId,doctorData).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
          
        },
        (error: any) => {
          console.error('Error updating data:', error);
        }
      );
    }
  }
 

  
  
  // deleteDoctor(id:any,i:any) {
  //  console.log(id);
       
  //   this.VetService.deleteDoctor(id).subscribe(res =>{
  //     this.arrDoctors.splice(i,1);
  //   })
    
  //    }
  
  
  // deleteDoctor(id: any) {
  //   // Find the index of the doctor with the specified 'id' in the arrDoctors array
  //   const index = this.arrDoctors.findIndex((doctor: { id: any }) => doctor.id === id);
  
  //   if (index !== -1) {
  //     // Delete the doctor on the server using your service method
  //     this.VetService.deleteDoctor(id).subscribe((res) => {
  //       // Remove the doctor from the arrDoctors array
  //       this.arrDoctors.splice(index, 1);
  //     });
  //   }
  // }
  
  deleteDoctor(id: number) {
   
    const id_str = id.toString();
    this.VetService.deleteDoctor(id_str).subscribe(
      (response) => {
        console.log('doctor deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting doctor:', error);
      }
    );
  }

    
  }

