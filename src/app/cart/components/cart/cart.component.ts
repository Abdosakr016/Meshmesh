import { Component } from '@angular/core';

import { CartService } from '../../service/cart/cart.service';
import { CounterService } from '../../service/counter/count.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
 

export class CartComponent {


  productOfCart: any;
  selectedItems !: any [];
  count: number = 0;
  total: number = 0;


  constructor(private cartService: CartService , private counter : CounterService) { }

  ngOnInit() {

    
    this.selectedItems = this.cartService.getSelectedItems();
    this.counter.getCounterVal().subscribe(val => this.count = val)
    // this.totalPice()
    // console.log(this.selectedItems)
  }
  removeItem(item: any){
    if(confirm("do you sure  for remove this item") == true) {
      this.selectedItems = this.selectedItems.filter( val => val != item);
      this.cartService.updatedSelectedItems(this.selectedItems );
      this.counter.setCartValue(--this.count)
    }

    
   }}