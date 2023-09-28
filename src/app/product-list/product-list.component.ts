import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  seller :any;
  constructor(private  ApiServiceService:ApiServiceService ) { }

  ngOnInit() {
    this.ApiServiceService.getProductList().subscribe(((data)=>this.seller=data)
    );
  }
  
}
