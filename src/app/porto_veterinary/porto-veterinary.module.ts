import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVeterinaryComponent } from './components/create-veterinary/create-veterinary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatListDoctorsComponent } from './components/creat-list-doctors/creat-list-doctors.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreateVeterinaryComponent,
    CreatListDoctorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CreateVeterinaryComponent,
    CreatListDoctorsComponent
  ]
})
export class PortoVeterinaryModule { }
