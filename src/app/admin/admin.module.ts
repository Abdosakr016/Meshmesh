import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDComponent } from './components/user-d/user-d.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  
       UserDComponent,
       LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
