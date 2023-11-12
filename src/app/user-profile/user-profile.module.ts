import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { UserAccountComponent } from './component/user-account/user-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyPetsComponent } from './component/my-pets/my-pets.component';


@NgModule({
  declarations: [
    CardComponent,
    UserAccountComponent,
    MyPetsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserProfileModule { }
