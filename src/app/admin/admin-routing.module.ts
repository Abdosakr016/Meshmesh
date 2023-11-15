import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin.component';
import { TpetsComponent } from './tpets/tpets.component';
import { TusersComponent } from './tusers/tusers.component';
import { TsupplyComponent } from './tsupply/tsupply.component';
const routes: Routes = [
 
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
       path: 'tpets',
      component:TpetsComponent ,
     },
     {
      path: 'tusers',
     component:TusersComponent ,
    }
    ,
    {
      path: 'tsupply',
     component:TsupplyComponent ,
    },
  ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
