import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { VeterinaryService } from '../../services/veterinary.service';
import { ApiVetCenterService } from '../../../vets-center/services/api-vet-center.service';

@Component({
  selector: 'app-create-veterinary',
  templateUrl: './create-veterinary.component.html',
  styleUrls: ['./create-veterinary.component.css']
})
export class CreateVeterinaryComponent implements OnInit  {
  vetCenterForm!: FormGroup;
  logoBase64: any;
  taxBase64:any;
  licenseBase64:any;
  commercialBasde64:any;
  imageFileLogo: any
  imageFilelicense: any
  imageFileTax: any
  imageFileCommrec: any

  cities: string[] = ['Cairo',  'Alexandria',  'Giza',  'Shubra El Kheima',  'Port Said',  'Suez',  'Luxor',
  'Aswan',  'Damanhur',  'Al Minya',  'Beni Suef',  'Hurghada',  'Ismailia',  'Faiyum',  'Asyut',  'Mansoura',
  'Tanta',  'Damietta',  'Zagazig',  'Arish'];

  constructor(private formBuilder: FormBuilder, private apiService:ApiVetCenterService){}
  ngOnInit() {
    this.validatVetCenterForm()
  }


  validatVetCenterForm(){
    this.vetCenterForm = this.formBuilder.group({
      name: ['',],
      street_address: ['',],
      governorate: ['',],
      logo: ['',],
      license: ['',],
      open_at: ['',],
      close_at: ['',],
      tax_record: ['',],
      commercial_record: ['',],
      about: [ '',]
    });
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
    console.log(this.vetCenterForm);

    if (this.vetCenterForm.valid) {
      const vetData = this.vetCenterForm.value;
      vetData.user_id = "1";
      console.log("helo");
      console.log(this.vetCenterForm);

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

  onUpdateVet() {
    if (this.vetCenterForm.valid) {
      const vetData = this.vetCenterForm.value;
      vetData.user_id = "1"; // Assuming user_id needs to be sent with the request

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
      console.log("hi",vetData);
      console.log("hi",this.imageFileCommrec);

        formData.append('commercial_record', this.imageFileCommrec);
      }

      // Append other form data fields
      formData.append('name', vetData.name);
      formData.append('street_address', vetData.street_address);
      formData.append('governorate', vetData.governorate);
      formData.append('about', vetData.about);
      formData.append('open_at', vetData.open_at);
      formData.append('close_at', vetData.close_at);

      console.log("hi",vetData);


      // Assuming you have the vet's ID stored in a variable called 'vetId'
      this.apiService.updateVet(23, vetData).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
        },
        (error: any) => {
          console.error('Error updating data:', error);
        }
      );
    } else {
      console.log('Validation error');
    }
  }
}
