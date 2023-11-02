import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { UserAccountComponent } from './component/user-account/user-account.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserProfileModule { }
