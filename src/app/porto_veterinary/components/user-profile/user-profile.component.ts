import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { VeterinaryService } from '../../services/veterinary.service';
import { ApiVetCenterService } from '../../../vets-center/services/api-vet-center.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/components/auth.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  vetCenterFormstore!: FormGroup;
  vetCenterFormupdate!: FormGroup;
  doctorForm!: FormGroup;
  doctorForms: FormGroup[] = [];
  vets :any;
  vet : any;
  doctorBase64:any;
  logoBase64: any;
  taxBase64:any;
  licenseBase64:any;
  commercialBasde64:any;
  imageFileLogo: any
  imageFilelicense: any
  imageFileTax: any
  imageFileCommrec: any
  arrDoctors: any[] = [];
  deletevetId: any;
  updateid:any;
  deleteId: any;
  imageFile: any;
  userData: any;
  logopath: any = 'http://127.0.0.1:8000/';

  constructor( private userService:AuthService,private formBuilder: FormBuilder, private apiService:ApiVetCenterService, private router : Router,private route: ActivatedRoute,private VetService:VeterinaryService){}
  ngOnInit() {
    this.getAuthUser();
  }
  cities: string[] = ['Cairo',  'Alexandria',  'Giza',  'Shubra El Kheima',  'Port Said',  'Suez',  'Luxor',
  'Aswan',  'Damanhur',  'Al Minya',  'Beni Suef',  'Hurghada',  'Ismailia',  'Faiyum',  'Asyut',  'Mansoura',
  'Tanta',  'Damietta',  'Zagazig',  'Arish'];

  getAuthUser(){
    this.userService.getUserData().subscribe(
      (data) => {
        this.userData = data;
        console.log(this.userData );

      },
      (error) => {
        console.error(error);
      }
    );
  }
  validatVetCenterFormstore(){
    this.vetCenterFormstore = this.formBuilder.group({
      name: ['',Validators.required],
      street_address: ['',Validators.required],
      governorate: ['',Validators.required],
      logo: ['',Validators.required],
      license: ['',Validators.required],
      open_at: ['',Validators.required],
      close_at: ['',Validators.required],
      tax_record: ['',Validators.required],
      commercial_record: ['',Validators.required],
      about: [ '',Validators.required]
    });
  }

  onAddVet() {
    if (this.vetCenterFormstore.valid) {
      const vetData = this.vetCenterFormstore.value;
      vetData.user_id = "1";

      // Create a FormData object
      const formData = new FormData();

      // Append the base64-encoded image data to the FormData
      formData.append('logo', this.imageFileLogo);
      formData.append('license', this.imageFilelicense);
      formData.append('tax_record', this.imageFileTax);
      formData.append('commercial_record', this.imageFileCommrec);

      // Append other form data fields
      for (const key of Object.keys(vetData)) {
        formData.append(key, vetData[key]);
      }

      // Update the data using the API service
      this.apiService.addNewVet(formData).subscribe(
        (response) => {
          console.log('Data Added successfully:', response);

        },
        (error: any) => {
          console.error('Error Adding data:', error);
        }
      );
    }else{
      console.log("Enternal service error");
    }
  }
  get_imag_logo(event: any) {
    const logofile = event.target.files[0];
    this.imageFileLogo=event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // Convert the image to base64
      const base64Image = reader.result as string;
      // Store the base64 data in a variable, but don't set it as the input value
      this.logoBase64 = base64Image;
    };
    reader.readAsDataURL(logofile);
  }

  get_image_license(event: any) {
    const licensefile = event.target.files[0];
    this.imageFilelicense=event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // Convert the image to base64
      const base64Image = reader.result as string;
      // Store the base64 data in a variable, but don't set it as the input value
      this.licenseBase64 = base64Image;
    };
    reader.readAsDataURL(licensefile);
  }

  get_image_tax(event: any) {
    const taxfile = event.target.files[0];
    this.imageFileTax=event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // Convert the image to base64
      const base64Image = reader.result as string;
      // Store the base64 data in a variable, but don't set it as the input value
      this.taxBase64 = base64Image;
    };
    reader.readAsDataURL(taxfile);
  }

  get_image_commrec(event: any) {
    const commrecfile = event.target.files[0];
    this.imageFileCommrec=event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // Convert the image to base64
      const base64Image = reader.result as string;
      // Store the base64 data in a variable, but don't set it as the input value
      this.commercialBasde64 = base64Image;
    };
    reader.readAsDataURL(commrecfile);
  }
}
