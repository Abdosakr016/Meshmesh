import { Component } from '@angular/core';
import { CounterService } from 'src/app/cart/service/counter/count.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  count: number = 0;
  username: string = '';
  userInSession: any;

  constructor(private counter: CounterService) {}

  ngOnInit() {
    this.counter.getCounterVal().subscribe(val => this.count = val);
    const userInSession = sessionStorage.getItem('user');

    if (userInSession) {
      // Parse the user object from the stored string
      const user = JSON.parse(userInSession);

      // Access the 'name' property and assign it to the 'username' variable
      this.username = user.Name;

      // You can use the 'username' variable to display the name in your template
      this.userInSession = true; // Set userInSession to true
    } else {
      // The user object is not in session storage
      this.userInSession = false;
    }
  }
}
