import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDComponent } from './components/user-d/user-d.component';

const routes: Routes = [
    {
        path: 'userd',
        component: UserDComponent,
      },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
