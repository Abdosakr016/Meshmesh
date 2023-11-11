import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { VeterinaryService } from '../../services/veterinary.service';
import { ApiVetCenterService } from '../../../vets-center/services/api-vet-center.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/components/auth.service';

@Component({
  selector: 'app-myvets',
  templateUrl: './myvets.component.html',
  styleUrls: ['./myvets.component.css']
})
export class MyvetsComponent {
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

  cities: string[] = ['Cairo',  'Alexandria',  'Giza',  'Shubra El Kheima',  'Port Said',  'Suez',  'Luxor',
  'Aswan',  'Damanhur',  'Al Minya',  'Beni Suef',  'Hurghada',  'Ismailia',  'Faiyum',  'Asyut',  'Mansoura',
  'Tanta',  'Damietta',  'Zagazig',  'Arish'];

  constructor(private userService:AuthService,private formBuilder: FormBuilder, private apiService:ApiVetCenterService, private router : Router,private route: ActivatedRoute,private VetService:VeterinaryService){}
  ngOnInit() {
    this.validatVetCenterFormstore();
    this.validatVetCenterFormupdate();
    this.getvets();
    this.getDoctors()
    this.getAuthUser();
    this.initializeDoctorForm();
    console.log(this.vetCenterFormstore);

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

  validatVetCenterFormupdate(){
    this.vetCenterFormupdate = this.formBuilder.group({
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

  getvets(){
    this.apiService.getProductList().subscribe(((data: any) => (this.vets = data['data'])),
    (error) => console.log(error),
    () => console.log("COMPLETE"))
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
          this.getvets();
        },
        (error: any) => {
          console.error('Error Adding data:', error);
        }
      );
    }else{
      console.log("Enternal service error");
    }
  }

  setUpdateData(id: number) {
    this.updateid = id;
  }

  onUpdateVet() {
    if (this.vetCenterFormupdate.valid) {
      const vetData = this.vetCenterFormupdate.value;
      vetData.user_id = this.userData.id; // Assuming user_id needs to be sent with the request

      // Create a FormData object
      const formData = new FormData();

      // Append the base64-encoded image data to the FormData (if they have been previously uploaded)
      if (vetData.imageFileLogo) {
        formData.append('logo', vetData.imageFileLogo);
      }
      if (vetData.imageFilelicense) {
        formData.append('license', vetData.imageFilelicense);
      }
      if (vetData.imageFileTax) {
        formData.append('tax_record', vetData.imageFileTax);
      }
      if (this.imageFileCommrec) {
        formData.append('commercial_record', this.imageFileCommrec);
      }
      formData.append('logo', vetData.imageFileLogo);
      // formData.append('_method', 'PUT');

      // Append other form data fields
      formData.append('name', vetData.name);
      formData.append('street_address', vetData.street_address);
      formData.append('governorate', vetData.governorate);
      formData.append('about', vetData.about);
      formData.append('open_at', vetData.open_at);
      formData.append('close_at', vetData.close_at);
      // Assuming you have the vet's ID stored in a variable called 'vetId'
      this.apiService.updateVet(this.updateid, vetData).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
          this.getvets();

        },
        (error: any) => {
          console.error('Error updating data:', error);
        }
      );
    } else {
      console.log('Validation error');
    }
  }

  deleteVet(id: number) {

    this.deletevetId = id;

  }

  modeldeleteVet() {
    this.apiService.deleteProduct(this.deletevetId).subscribe(
      (response) => {
        console.log('Vet deleted successfully:', response);
        // this.getDoctors();
      this.getvets();

      },

      (error) => {
        console.error('Error deleting Vet:', error);
      }
    );
  }

  getDoctors() {
    this.VetService.get_doctors().subscribe(res => {
      console.log(Object.values(res)[0]);
      this.arrDoctors = Object.values(res)[0];
      // console.log(this.arrDoctors);

    });
  }

  deleteDoctor(id: number) {
    this.deleteId = id;
  }

  modeldeleteDoctor() {
    this.VetService.deleteDoctor(this.deleteId).subscribe(
      (response) => {
        console.log('doctor deleted successfully:', response);
        this.getDoctors();
      },

      (error) => {
        console.error('Error deleting doctor:', error);
        this.getDoctors();
      }
    );
  }

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

  initializeDoctorForm() {
    this.doctorForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }

  get_doctorImagepath(event: any) {
    const file = event.target.files[0];
    this.imageFile = event.target.files[0];
    const reader = new FileReader();
    // reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result as string;
      this.doctorBase64 = base64Image;
    };
    reader.readAsDataURL(file);
  }

  onAddDoctor() {
    if (this.doctorForm.valid) {
      const doctorData = this.doctorForm.value;
      doctorData.veterinary_center_id = 2;

      const formData = new FormData();
      formData.append('image', this.imageFile);

      for (const key of Object.keys(doctorData)) {
        formData.append(key, doctorData[key]);
      }

      // Update the data using the API service
      this.VetService.addNewDoctor(formData).subscribe(

        (response) => {

          console.log('Data updated successfully:', response);
          this.getDoctors();
        },
        (error: any) => {
          console.error('Error updating data:', error);
        }
      );

    }

  }
}
