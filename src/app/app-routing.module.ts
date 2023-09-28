import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChooseFormComponent } from './choose-form/choose-form.component';
import { RegisterClinicComponent } from './register-clinic/register-clinic.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'cart/:id',
    component: CartComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'choose-form',
    component: ChooseFormComponent,
  },
  {
    path: 'register-clinic',
    component: RegisterClinicComponent,
  },
  
  
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
