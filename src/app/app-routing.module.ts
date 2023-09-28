import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChooseFormComponent } from './choose-form/choose-form.component';
import { RegisterClinicComponent } from './register-clinic/register-clinic.component';

  const routes: Routes = [
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
