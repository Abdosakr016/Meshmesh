import { Component } from '@angular/core';
import { ApiServiceService } from '../../../pets/services/api-service.service';
import { ApiVetCenterService } from '../../services/api-vet-center.service';

@Component({
  selector: 'app-show-vets',
  templateUrl: './show-vets.component.html',
  styleUrls: ['./show-vets.component.css']
})
export class ShowVetsComponent {
  vets :any;
    constructor(private apiService:ApiVetCenterService){}
      ngOnInit(){
        this.apiService.getProductList().subscribe(((data: any) => (this.vets = data['data'])),
        (error) => console.log(error),
        () => console.log("COMPLETE"))
      }
}
