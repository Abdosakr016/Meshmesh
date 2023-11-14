import { Component } from '@angular/core';
import { Router , RouterModule } from '@angular/router';
import { AdminRoutingModule } from '../../admin-routing.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private AdminRoutingModule: Router) { }


}
