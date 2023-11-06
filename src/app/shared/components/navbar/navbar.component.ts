import { Component } from '@angular/core';
import { CounterService } from 'src/app/cart/service/counter/count.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent {
  count: number = 0;
  username: string = '';
  userInSession: any;
  
  constructor(private counter: CounterService,private router: Router) {}

  ngOnInit() {
    this.counter.getCounterVal().subscribe(val => this.count = val);
    const userInSession = sessionStorage.getItem('user');

    if (userInSession) {
      const user = JSON.parse(userInSession);
      this.username = user.Name;
      this.userInSession = true; 
      this.router.navigate(['/']);
      

    } else {
      this.userInSession = false;
    }
  }

  logout() {
    sessionStorage.removeItem('user');
    this.username = ''; // Clear the username
    this.userInSession = false;
  }
}
