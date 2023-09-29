import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  selectedItems: any[] = [];
  // private elements = new BehaviorSubject(this.selectedItems.length)
  
  constructor() {   
  }

  addItem(item: any) {
    this.selectedItems.push(item);
    
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
  }




}
