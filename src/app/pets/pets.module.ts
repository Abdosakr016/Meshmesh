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
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { BirdsComponent } from './components/birds/birds.component';
import { AnimaForBreadingComponent } from './components/anima-for-breading/anima-for-breading.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [  
    CardComponent,
  ProductListComponent,
  FilterSearchPipe,
  SearchComponent,
  CatsComponent,
  DogsComponent,
  BirdsComponent,
  AnimaForBreadingComponent,


],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    NgxPaginationModule
  ],

  exports:[
    ProductListComponent,
    CardComponent,
    DogsComponent,
    CatsComponent,
    BirdsComponent,
    AnimaForBreadingComponent


  ]
})
export class PetsModule { }
