import { Component } from '@angular/core';
import { SharedService } from 'src/app/pets/services/shared.service';
import { CartService } from 'src/app/cart/service/cart/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResults: any[] = [];
  arryCart:any[]=[];
productInCart=false;
alertMessage=''
  constructor(
    private sharedService: SharedService,
    private CartService : CartService,
    ) {}

  ngOnInit() {
  
    this.sharedService.currentSearchResults.subscribe(
      (results) => (this.searchResults = results)
      
    );
    console.log(this.searchResults)
  }
  addToCart(product: any) {
    this.productInCart=this.CartService.productInCart
    this.alertMessage=this.CartService.alertMessage
    
    this.CartService.addCartArray_service(product);
    
      }
    
      closeAlert() {
        this.productInCart = false;
      }
  generateImageUrl(image: string) {
    return `http://localhost:8000/storage/${image}`;
  } 
}
