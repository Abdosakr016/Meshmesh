import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SuppliesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
   
    SuppliesComponent
  ]
})
export class SuppliesModule { }
