import { Component } from '@angular/core';
import { ApiServiceService } from '../../../pets/services/api-service.service';

@Component({
  selector: 'app-show-vets',
  templateUrl: './show-vets.component.html',
  styleUrls: ['./show-vets.component.css']
})
export class ShowVetsComponent {
  pets :any;
    constructor(private apiService:ApiServiceService){}
      ngOnInit(){
        this.apiService.getProductList().subscribe(((data)=>this.pets=data),
        (error) => console.log(error),
        () => console.log("COMPLETE"))
      }

}
