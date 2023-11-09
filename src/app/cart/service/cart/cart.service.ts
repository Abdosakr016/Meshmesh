import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _products_cart_length = new BehaviorSubject<number>(0);
  products_cart_length$ = this._products_cart_length.asObservable();
  // productInCart = false;
  // alertMessage = '';

  selectedItems: any[] = [];
  // private elements = new BehaviorSubject(this.selectedItems.length)

  constructor() {
  }

  addItem(item: any) {
    this.selectedItems.push(item);
    localStorage.setItem("Items", JSON.stringify(this.selectedItems));

  }


  getSelectedItems() {
    if (localStorage.getItem("Items") != null) {
      return this.selectedItems = JSON.parse(localStorage.getItem("Items") as any) || [];
    } else {
      return " your cart Empty";
    }
  }
  ItemsInCart(item: any) {
    return this.selectedItems.findIndex((x: any) => x.id === item.id) > -1;
  }

  removeItem(item: any) {
    const index = this.selectedItems.findIndex((x: any) => x.id === item.id);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
      localStorage.setItem("Items", JSON.stringify(this.selectedItems));
    }

  }

  updatedSelectedItems(value: any) {
    this.selectedItems = value;

  }
  clearItems() {
    localStorage.clear()
      ;
  }




}
