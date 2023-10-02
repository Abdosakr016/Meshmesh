import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creat-list-doctors',
  templateUrl: './creat-list-doctors.component.html',
  styleUrls: ['./creat-list-doctors.component.css']
})
export class CreatListDoctorsComponent implements OnInit {
  doctorForm!: FormGroup;
  doctorForms: FormGroup[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeDoctorForm();
  }

  initializeDoctorForm() {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      photo: ['',Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission here
  }

  addDoctorForm() {
    this.doctorForms.push(this.fb.group({
      name: ['', Validators.required],
      photo: ['',Validators.required]
    }));
  }
}
