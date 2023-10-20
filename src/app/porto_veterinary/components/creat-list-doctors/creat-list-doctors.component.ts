import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeterinaryService } from '../../services/veterinary.service';

@Component({
  selector: 'app-creat-list-doctors',
  templateUrl: './creat-list-doctors.component.html',
  styleUrls: ['./creat-list-doctors.component.css']
})
export class CreatListDoctorsComponent implements OnInit {
  doctorForm!: FormGroup;
  doctorForms: FormGroup[] = [];
  doctorBase64:any;
  arrDoctors:any;
  constructor(private fb: FormBuilder,private VetService:VeterinaryService) { }

  ngOnInit() {
    this.initializeDoctorForm();
    this.VetService.get_doctors().subscribe(((data)=>this.arrDoctors=data))
  }

  initializeDoctorForm() {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      photo: ['',Validators.required]
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
      console.log(doctorData);
  
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
 

  
  
  deleteDoctor(doctor_id: number) {
   
    const doctor_id_str = doctor_id.toString();
  
   
    this.VetService.deleteDoctor(doctor_id_str).subscribe(
      (response) => {
        console.log('doctor deleted successfully:', response);
  
 
      },
      (error) => {
        console.error('Error deleting doctor:', error);
      }
    );
  }
}
