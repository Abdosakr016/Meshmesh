import { Component } from '@angular/core';
import { ApiServiceService } from '../../../pets/services/api-service.service';
import { ApiVetCenterService } from '../../services/api-vet-center.service';
import { ActivatedRoute } from '@angular/router';
import { Ivetcenter } from '../../interface/ivetcenter';
import { VeterinaryService } from '../../../porto_veterinary/services/veterinary.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veterinary-details',
  templateUrl: './veterinary-details.component.html',
  styleUrls: ['./veterinary-details.component.css']
})
export class VeterinaryDetailsComponent {
  pets :any;
  vet  :any;
  logopath: any = 'http://127.0.0.1:8000/';
  imageFile: any;
  doctorForm!: FormGroup;
  doctorForms: FormGroup[] = [];
  doctorBase64: any;
  updateDoctorForm!: FormGroup;
  arrDoctors: any = [];
  getId: any;
  currentDoctor: any;
  base64: any;
  deleteId: any;
  imageDoctor: any;
  updateId: any;

  constructor(private fb: FormBuilder,private apiService:ApiVetCenterService, private route: ActivatedRoute,private VetService: VeterinaryService){}
  ngOnInit() {
    this.pets =this.route.snapshot['params']['id']
    this.apiService.getVetDetails(this.pets).subscribe(
      ((data: any) => (this.pets = data['data']))
  )
  this.getDoctors();
  }

  getDoctors() {
    this.VetService.get_doctors().subscribe(res => {
      console.log(Object.values(res)[0]);
      this.arrDoctors = Object.values(res)[0];
    });
  }
}
