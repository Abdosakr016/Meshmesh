
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { SharedModule } from 'primeng/api';




@NgModule({
  declarations: [
    ContainerComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component
  ],
  imports: [
    CommonModule,
  SharedModule
  
  ],
  exports:[
ContainerComponent,
Section1Component,
Section2Component,
Section3Component,
Section4Component

  ]
})
export class HomeModule { }
