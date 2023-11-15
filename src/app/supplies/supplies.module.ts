import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { ReactiveFormsModule } from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    SuppliesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
  ],
  exports:[
   
    SuppliesComponent
  ]
})
export class SuppliesModule { }
