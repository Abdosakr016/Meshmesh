import { Component } from '@angular/core';
import { CounterService } from 'src/app/cart/service/counter/count.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
count : number = 0;

constructor( private counter :CounterService){}
ngOnInit(){
  this.counter.getCounterVal().subscribe(val => this.count = val);
}
}