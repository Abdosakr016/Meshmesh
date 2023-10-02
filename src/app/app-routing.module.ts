import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/components/cart/cart.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ChooseFormComponent } from './auth/components/choose-form/choose-form.component';
import { RegisterClinicComponent } from './auth/components/register-clinic/register-clinic.component';
import { ContainerComponent } from './home/components/container/container.component';
import { ProductListComponent } from './pets/components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  },

  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartComponent
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
    path: 'choose_form',
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
