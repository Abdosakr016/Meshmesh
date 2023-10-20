import { Component } from '@angular/core';
import { ApiServiceService } from '../../../pets/services/api-service.service';

@Component({
  selector: 'app-veterinary-details',
  templateUrl: './veterinary-details.component.html',
  styleUrls: ['./veterinary-details.component.css']
})
export class VeterinaryDetailsComponent {
  pets :any;
    constructor(private apiService:ApiServiceService){}
      ngOnInit(){
        this.apiService.getProductList().subscribe(((data)=>this.pets=data),
        (error) => console.log(error),
        () => console.log("COMPLETE"))
      }
}
