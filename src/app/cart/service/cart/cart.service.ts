import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
>>>>>>> d5ae2848a8239cbde633c89bfb2f455f62c5bcbc

@Injectable({
  providedIn: 'root'
})
export class CartService {


  selectedItems: any[] = [];
  // private elements = new BehaviorSubject(this.selectedItems.length)
<<<<<<< HEAD

  constructor() {
=======
  
  constructor() {   
>>>>>>> d5ae2848a8239cbde633c89bfb2f455f62c5bcbc
  }

  addItem(item: any) {
    this.selectedItems.push(item);
<<<<<<< HEAD
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
=======
    
  }
   

  getSelectedItems() 
  {
    return this.selectedItems;
  }

  updatedSelectedItems(value:any){
    this.selectedItems =value ;

  }
  clearItems() {
    this.selectedItems = [];
>>>>>>> d5ae2848a8239cbde633c89bfb2f455f62c5bcbc
  }




}
