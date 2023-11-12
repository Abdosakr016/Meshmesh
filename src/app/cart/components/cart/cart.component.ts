import { Component } from '@angular/core';

import { CartService } from '../../service/cart/cart.service';
import { OrderService } from '../../service/order/order.service';
import { AuthService } from 'src/app/auth/components/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
 

export class CartComponent {


  productOfCart: any;

  count: number = 0;
  total: number = 0;
  userData: any
  cart_products:any[]=[]
  constructor(
    private cartService: CartService,
    private orderService:OrderService ,
    private userService:AuthService 
    
    ) { }

  ngOnInit() {

    this.getAuthUser()
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
 
  checkout() {
    if (!this.userData) {
      console.error('User data is not available.');
      return;
    }
  
    const newOrder = { "user_id": this.userData.id, "total_price": this.getTotalPrice() };
  
    this.orderService.makeOrder(newOrder).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error: any) => {
        console.error('Error adding data:', error);
      }
    );
  }
  // checkout() {
  //   if (!this.userData) {
  //     console.error('User data is not available.');
  //     return;
  //   }
  
  //   // Step 1: Create an order
  //   const newOrder = { "user_id": this.userData.id, "total_price": this.getTotalPrice() };
  
  //   this.orderService.makeOrder(newOrder).subscribe(
  //     (orderResponse) => {
  //       console.log('Order created successfully:', orderResponse);
  
  //       // Step 2: Create OrderItems for each product in the cart
  //       const orderItemsPromises = this.cart_products.map((product) => {
  //         const orderItem = {
  //           order_id: orderResponse.id, // Use the order ID obtained from the server
  //           product_id: product.id,
  //           quantity: product.quantity,
  //           // ... other properties of OrderItem
  //         };
  
  //         return this.orderService.createOrderItem(orderItem).toPromise();
  //       });
  
  //       // Wait for all OrderItems to be created
  //       Promise.all(orderItemsPromises).then(
  //         (orderItemsResponses) => {
  //           console.log('OrderItems created successfully:', orderItemsResponses);
            
  //           // Optionally, you can clear the cart after successful checkout
  //           this.cartService.clearItems();
  //         },
  //         (orderItemsError) => {
  //           console.error('Error creating OrderItems:', orderItemsError);
  //         }
  //       );
  //     },
  //     (orderError: any) => {
  //       console.error('Error creating order:', orderError);
  //     }
  //   );
  // }
  
  getAuthUser(){
    this.userService.getUserData().subscribe(
      (data) => {
        this.userData = data;
        console.log(this.userData );

      },
      (error) => {
        console.error(error);
      }
    );}
  }
  