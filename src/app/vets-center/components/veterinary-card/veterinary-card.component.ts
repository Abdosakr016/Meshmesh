import { Component,Input } from '@angular/core';
import { ApiServiceService } from '../../../pets/services/api-service.service';
import { Ipet } from '../../../pets/interface/Ipet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinary-card',
  templateUrl: './veterinary-card.component.html',
  styleUrls: ['./veterinary-card.component.css']
})
export class VeterinaryCardComponent {
  @Input() pet !: Ipet;
  constructor(private apiService:ApiServiceService,private router : Router){}
  Details(item : any){
    // this.CartService.addItem(item);
    // this.counter.setCartValue(++this.count)
    this.router.navigate(['show_Vet_details',item ])
  }
  
}
