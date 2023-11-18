import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { VeterinaryService } from 'src/app/porto_veterinary/services/veterinary.service';
import { ApiVetCenterService } from 'src/app/vets-center/services/api-vet-center.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/components/auth.service';
import { Idoctor } from 'src/app/porto_veterinary/services/doctorclass';
@Component({
  selector: 'app-tdoctor',
  templateUrl: './tdoctor.component.html',
  styleUrls: ['./tdoctor.component.css']
})
export class TdoctorComponent {
  searchText=''
    p:number=1;
    itemsPerPage:number=3;  
  
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
    doctors: any;
    deletevetId: any;
    updateid:any;
    deleteId: any;
    imageFile: any;
    userData: any;
    logopath: any = 'http://127.0.0.1:8000/';
    veterenaryid: any;
    updateDoctorForm!: FormGroup;
  
    
    updateId: any;
    base64: any;
    imageDoctor: any;
    vetData: any;
  
    constructor(private userService:AuthService,private formBuilder: FormBuilder, private apiService:ApiVetCenterService, private router : Router,private route: ActivatedRoute,private VetService:VeterinaryService){
      this.updateDoctorForm = this.formBuilder.group({
        name: ['', Validators.required],
        image: ['', Validators.required],
        experience: ['', Validators.required],
       
      });
    }
    ngOnInit() {
     
      this.getAuthUser();
      this.getOwner();
      this.getDoctors()
     
      this.initializeDoctorForm();
     
  
    }
   
   
    getOwner(){
      this.apiService.getmyvet().subscribe(((data: any) =>  (this.vets = data['data'])),
      (error) => console.log(error),
      () => console.log("COMPLETE" , this.vets))
    }
  

    generateImageUrl(image: string) {
      return `http://localhost:8000/storage/${image}`;
      
    } 
  
  
  
   
  
    getDoctors() {
      this.VetService. get_doctors().subscribe(res => {
        // console.log(Object.values(res)[0]);
        this.doctors = res;
        console.log(this.doctors);
      
      });
    }
    // getDoctors(): void {
    //   this.VetService.get_my_doctors().subscribe((data) => {
    //     this.veterenary = data;
    //   });
    // }
    deleteDoctor( did:number) {
      this.deleteId = did;
      // this.veterenaryid = vid;
      console.log(this.deleteId);
      // console.log(this.veterenaryid);
    }
  
    modeldeleteDoctor() {
      this.VetService.deleteDoctor(this.veterenaryid,this.deleteId).subscribe(
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
  
    // //get vet_id
    // getAuthVet(){
    //   this.VetService.
    // }
  
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
  

    
  
  
    get_imagepath(event: any) {
      const file = event.target.files[0];
      this.imageDoctor = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64 = reader.result;
      };
    }
  
  }
  
 
