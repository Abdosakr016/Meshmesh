import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';

const _ = $; // Rename the local declaration

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    jQuery(function ($) {
      $(".sidebar-dropdown > a").click(function () {
        // Your existing sidebar dropdown code
      });

      $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
      });
      $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
      });
    });
  }

}
