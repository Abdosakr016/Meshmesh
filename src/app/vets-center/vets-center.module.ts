import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowVetsComponent } from './components/show-vets/show-vets.component';
import { VeterinaryCardComponent } from './components/veterinary-card/veterinary-card.component';
import { VeterinaryDetailsComponent } from './components/veterinary-details/veterinary-details.component';

@NgModule({
  declarations: [
    ShowVetsComponent,
    VeterinaryCardComponent,
    VeterinaryDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VetsCenterModule { }
