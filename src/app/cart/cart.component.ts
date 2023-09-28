import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { CartService } from '../service/cart.service';
import { CounterService } from '../service/count.service';

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