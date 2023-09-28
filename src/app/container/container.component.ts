import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],

  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .container-fluid {
      background-image: url('/assets/bg.jpeg');
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin:0;
      background-repeat: repeat-y;

    }
  `]
})
export class ContainerComponent {

}
