import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CounterService } from '../service/count.service';
CartService
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
count : number = 0;

constructor(private CartService :CartService , private counter :CounterService){}
ngOnInit(){
  this.counter.getCounterVal().subscribe(val => this.count = val);
}
}