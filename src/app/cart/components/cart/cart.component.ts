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
    this.totalPice()
    // console.log(this.selectedItems)
  }
  removeItem(item: any){
      this.selectedItems = this.selectedItems.filter( val => val != item);
      this.cartService.updatedSelectedItems(this.selectedItems );
    if(this.count>0){
      this.counter.setCartValue(--this.count)
    }
    this.total -= item.pet_price;

    

    
   }
   totalPice(){
    this.total = 0;
    for(let i in this.selectedItems){
      this.total += this.selectedItems[i].price;
      // console.log(this.selectedItems)
    }
  }
  generateImageUrl(image: string) {
    return `http://localhost:8000/storage/${image}`;
  } 
  }