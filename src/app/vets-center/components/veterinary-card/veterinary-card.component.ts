import { Component,Input } from '@angular/core';
import { ApiServiceService } from '../../../pets/services/api-service.service';
import { Ipet } from '../../../pets/interface/Ipet';
import { Router } from '@angular/router';
import { Ivetcenter } from '../../interface/ivetcenter';
import { ApiVetCenterService } from '../../services/api-vet-center.service';

@Component({
  selector: 'app-veterinary-card',
  templateUrl: './veterinary-card.component.html',
  styleUrls: ['./veterinary-card.component.css']
})
export class VeterinaryCardComponent {
  @Input() pet !: Ivetcenter;
  logopath: any = 'http://127.0.0.1:8000/';
  constructor(private apiService:ApiVetCenterService, private router : Router){}
  // Details(item : any){
  //   // this.CartService.addItem(item);
  //   // this.counter.setCartValue(++this.count)
  //   this.router.navigate(['show_Vet_details',item ])
  // }
    deleteProduct(id: number) {

    const pet_id_str = id.toString();
    this.apiService.deleteProduct(id).subscribe(
      (response) => {
        console.log('Product deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
  getVetDetails(id: number, item: any) {

    const pet_id_str = id.toString();
    this.apiService.getVetDetails(id).subscribe(
      (response) => {
        console.log('Product deleted successfully:', response);
      this.router.navigate(['show_Vet_details',item.id ])

      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
