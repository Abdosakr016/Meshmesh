import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/components/cart/cart.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ChooseFormComponent } from './auth/components/choose-form/choose-form.component';
import { RegisterClinicComponent } from './auth/components/register-clinic/register-clinic.component';
import { ContainerComponent } from './home/components/container/container.component';
import { ProductListComponent } from './pets/components/product-list/product-list.component';
import { CreateVeterinaryComponent } from './porto_veterinary/components/create-veterinary/create-veterinary.component';
import { CreatListDoctorsComponent } from './porto_veterinary/components/creat-list-doctors/creat-list-doctors.component';
import { ShowVetsComponent } from './vets-center/components/show-vets/show-vets.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    canActivate :[authGuard]
  },

  {
    path: 'products',
    component: ProductListComponent,
    canActivate:[authGuard]

  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate :[authGuard]

  },
  {
    path: 'cart/:id',
    component: CartComponent,
    canActivate :[authGuard]

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
  {
    path: 'create_veterinary',
    component:CreateVeterinaryComponent ,
    canActivate :[authGuard]

  },
  
  {
    path: 'Add_Doctors',
    component: CreatListDoctorsComponent,
    canActivate :[authGuard]

  },
  {
    path: 'show_Vets',
    component: ShowVetsComponent,
    canActivate :[authGuard]

  },
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
