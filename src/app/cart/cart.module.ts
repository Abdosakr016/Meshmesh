import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';




@NgModule({
  declarations: [CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    SharedModule,
   
  ],
  exports:[CartComponent]
})
export class CartModule { }
