import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { CardComponent } from './components/card/card.component';
import { CartModule } from '../cart/cart.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { SearchComponent } from './components/search/search/search.component';

@NgModule({
  declarations: [  
    CardComponent,
  ProductListComponent,
  FilterSearchPipe,
  SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    FormsModule
  ],

  exports:[
    ProductListComponent,
    CardComponent,

  ]
})
export class PetsModule { }
