import { Component } from '@angular/core';
import { ApiServiceService } from '../../../pets/services/api-service.service';
import { ApiVetCenterService } from '../../services/api-vet-center.service';
import { ActivatedRoute } from '@angular/router';
import { Ivetcenter } from '../../interface/ivetcenter';

@Component({
  selector: 'app-veterinary-details',
  templateUrl: './veterinary-details.component.html',
  styleUrls: ['./veterinary-details.component.css']
})
export class VeterinaryDetailsComponent {
  pets :any;
  vet  :any;
  logopath: any = 'http://127.0.0.1:8000/';

  constructor(private apiService:ApiVetCenterService, private route: ActivatedRoute){}
  ngOnInit() {
    this.pets =this.route.snapshot['params']['id']
    this.apiService.getVetDetails(this.pets).subscribe(
      ((data: any) => (this.pets = data['data']))
  )
  }

}
