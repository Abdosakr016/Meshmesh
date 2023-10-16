import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';




@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule,
   
  ],
  exports:[CartComponent]
})
export class CartModule { }
