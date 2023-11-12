import { Component } from '@angular/core';

import { CartService } from '../../service/cart/cart.service';
import { OrderService } from '../../service/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
 

export class CartComponent {


  productOfCart: any;

  count: number = 0;
  total: number = 0;

  cart_products:any[]=[]
  constructor(
    private cartService: CartService,
    private orderService:OrderService ) { }

  ngOnInit() {

    
    this.cart_products=this.cartService.cartArray
  }
  removeItem(product: any){
    const index = this.cart_products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.cart_products.splice(index, 1);
    }

   }
   increaseQuantity(product: any) {
 
    const cartProduct = this.cart_products.find((p) => p.id === product.id);
    if (cartProduct) {
      cartProduct['quantity']++;
    }
  }
   decreaseQuantity(product: any) {

    const cartProduct = this.cart_products.find((p) => p.id === product.id);
    if (cartProduct && cartProduct['quantity'] > 1) {
      cartProduct['quantity']--;
    }
  }
   getTotalPrice(): number {

    return this.cart_products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  
  }
  generateImageUrl(image: string) {
    return `http://localhost:8000/storage/${image}`;
  } 
 
  checkout(){
   const newOrder=1
    this.orderService.makeOrder(newOrder ).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error: any) => {
        console.error('Error added data:', error);
      }
    );
  }
  
  }
  