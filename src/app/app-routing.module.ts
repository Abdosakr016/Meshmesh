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
import { UserAccountComponent } from './user-profile/component/user-account/user-account.component';
import { VeterinaryDetailsComponent } from './vets-center/components/veterinary-details/veterinary-details.component';
import { UserProfileComponent } from './porto_veterinary/components/user-profile/user-profile.component';
import { authGuard } from './auth.guard';
import { SuppliesComponent } from './supplies/components/supplies/supplies.component';
import { AboutComponent } from './about/components/about/about.component';
import { SearchComponent } from './pets/components/search/search/search.component';
import { MyPetsComponent } from './user-profile/component/my-pets/my-pets.component';
import { RegisterbothComponent } from './auth/components/registerboth/registerboth.component';
import { MyvetsComponent } from './porto_veterinary/components/myvets/myvets.component';
import { PetDetailsComponent } from './pets/components/pet-details/pet-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
    // canActivate :[authGuard]
  },
  {
    path: 'products',
    component: ProductListComponent
    // canActivate:[authGuard]

  },
  { path: 'product/:id', component: PetDetailsComponent },

  {
    path: 'search',
    component: SearchComponent
    // canActivate:[authGuard]

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
    // canActivate :[authGuard]

  },
  {
    path: 'show_Vets',
    component: ShowVetsComponent,
    // canActivate :[authGuard]

  },
  {
    path: 'user-account',
    component: UserAccountComponent
  },
  {
    path: 'show_Vet_details/:id',
    component: VeterinaryDetailsComponent,
  },
  {path: 'supplies',
  component: SuppliesComponent,
},

{path: 'about_us',
  component: AboutComponent,
},
{path: 'myPets',
  component: MyPetsComponent,
},
  {
    path: 'user-vet',
    component: UserProfileComponent,
  },
  {
    path: 'user-account',
    component: UserAccountComponent,
    canActivate :[authGuard]
  },
  {
    path: 'show_Vet_details',
    component: VeterinaryDetailsComponent,
  },
  {
    path: 'supplies',
    component: SuppliesComponent,
  },
  {
    path: 'mycenters',
    component: MyvetsComponent,
  },
  {
    path: 'registerone',
    component: RegisterbothComponent,
  },
  // {
  //   path: 'Peypal',
   
  // },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
