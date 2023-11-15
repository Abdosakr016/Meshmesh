import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartArray: any[] = [];
  private _products_cart_length = new BehaviorSubject<number>(0);
  products_cart_length$ = this._products_cart_length.asObservable();
  productInCart = false;
  alertMessage = '';

  constructor() { }

  addCartArray_service(product: any) {
    if (this.cartArray.find((cartProduct) => cartProduct.id === product.id)) {
      this.arlreadyFound(product);
      // console.log("is already here");
    } else {
      this.productInCart = false;
      this.alertMessage = '';
      this.cartArray = [...this.cartArray, product];
      this._products_cart_length.next(this.cartArray.length); 
      product['quantity'] = 1;
    console.log(this.cartArray)

    }
  }

  arlreadyFound(product: any) {
    this.productInCart = true;
    this.alertMessage = 'Product is already in the cart!';
    // alert('Product is already in the cart!')
    console.log(product)
  }
  // printCartArray() {
  //   console.log(this.cartArray)
  //     ;
  // }


  remove_item(){
    this._products_cart_length.next(this.cartArray.length); 
  
  }
}
