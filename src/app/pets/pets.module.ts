import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { AddPetReactiveComponent } from './components/add-pet-reactive/add-pet-reactive.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [  
    AddPetReactiveComponent,
    CardComponent,
  ProductListComponent],
  imports: [
    CommonModule,
    CardModule,
    CardModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule
  ],

  exports:[
    ProductListComponent,
    AddPetReactiveComponent,
    CardComponent,

  ]
})
export class PetsModule { }
