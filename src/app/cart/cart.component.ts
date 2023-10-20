import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './service/cart/cart.service';
import { CounterService } from './service/counter/count.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
 

export class CartComponent {

// item !: any ;

//   constructor(private ActivatedRoute : ActivatedRoute , private ApiServiceService :ApiServiceService){
//   }


  // ngOnInit(){
  //   const paramsID = this.ActivatedRoute.snapshot.params['id'];
  //   // console.log(paramsID);
  //   this.ApiServiceService
  //     .getProductDetails(paramsID)
  //     .subscribe((data: any) => {
  //       this.item = data
  //     } );
  // }
  productOfCart: any;
  selectedItems !: any [];
  count!: number;
  total: number = 0;


  constructor(private cartService: CartService ,private counter:CounterService) { }

  ngOnInit() {

    
    // this.selectedItems = this.cartService.getSelectedItems();
    this.selectedItems = this.cartService.getSelectedItems();
    this.counter.getCounterVal().subscribe(val => this.count = val);
    this.totalPice();
    // console.log(this.selectedItems)
  }
  removeItem(item: any){
    if(confirm("do you sure  for remove this item") == true) {
      this.selectedItems = this.selectedItems.filter( val => val != item);
      this.cartService.updatedSelectedItems(this.selectedItems );
      // this.total -=  this.selectedItems[item].price;
      this.cartService.removeItem(item);
    }
   }

  //  clearAllItems(){

  //   if(confirm("Do You Sure  For Remove Your Cart") == true) {
  //     this.selectedItems = this.selectedItems.filter( val => val != item);
  //     this.cartService.updatedSelectedItems(this.selectedItems );
  //   this.cartService.clearItems();
      
  //   }
  //  }

   totalPice(){
    this.total = 0;
    for(let i in this.selectedItems){
      this.total += this.selectedItems[i].pet_price;
      // console.log(this.selectedItems)
    }
  }


}
