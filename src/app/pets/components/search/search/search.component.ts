import { Component } from '@angular/core';
import { SharedService } from 'src/app/pets/services/shared.service';
import { CartService } from 'src/app/cart/service/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  p:number=1;
  itemsPerPage:number=4;  

  searchResults: any[] = [];
  arryCart:any[]=[];
productInCart=false;
alertMessage=''
  constructor(
    private sharedService: SharedService,
    private CartService : CartService,
     private router: Router
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
    this.router.navigate(['cart']);
    
      }
    
      closeAlert() {
        this.productInCart = false;
      }
  generateImageUrl(image: string) {
    return `http://localhost:8000/storage/${image}`;
  } 
}
