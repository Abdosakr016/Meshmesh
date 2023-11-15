import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin.component';
import { TpetsComponent } from './tpets/tpets.component';
import { TusersComponent } from './tusers/tusers.component';
import { authGuard } from '../auth.guard';
import { TordersComponent } from './torders/torders.component';
import { TvetcentersComponent } from './tvetcenters/tvetcenters.component';
import { TappointmentComponent } from './tappointment/tappointment.component';

import { TsupplyComponent } from './tsupply/tsupply.component';
const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
    canActivate :[authGuard],
    children:[
      {
       path: 'tpets',
       component:TpetsComponent ,
     },
     {
      path: 'tusers',
     component:TusersComponent ,
    },
    {
      path: 'torders',
     component:TordersComponent ,
    }
    ,
    {
      path: 'tsupply',
     component:TsupplyComponent ,
    },
  
  {
      component:TusersComponent ,
    },
    {
     path: 'tvetcenters',
     component:TvetcentersComponent ,
    },
    {
     path: 'tappointment',
     component:TappointmentComponent ,
    }
]},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
