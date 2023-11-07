import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliesComponent } from './components/supplies/supplies.component';



@NgModule({
  declarations: [
    SuppliesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   
    SuppliesComponent
  ]
})
export class SuppliesModule { }
