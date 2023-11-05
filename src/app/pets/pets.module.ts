import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { CardComponent } from './components/card/card.component';
import { CartModule } from '../cart/cart.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [  
    CardComponent,
  ProductListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  exports:[
    ProductListComponent,
    CardComponent,

  ]
})
export class PetsModule { }
