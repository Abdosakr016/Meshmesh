import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { Seller } from '../interface/seller';
import { ApiServiceService } from '../service/api-service.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() seller !: Seller;
  Items !: Array<any>;
  constructor(private router : Router, private CartService : CartService){}

  AddToCart(item : any){
    item.quantity = 1;
    this.CartService.addItem(item);
    this.router.navigate(['cart' , item.id]);
  }
}
