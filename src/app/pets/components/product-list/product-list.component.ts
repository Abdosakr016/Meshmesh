import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pets :any;
  constructor(private  ApiServiceService: ApiServiceService) { }

  ngOnInit() {
    this.ApiServiceService.getProductList().subscribe(((data)=>this.pets=data)
    );
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
