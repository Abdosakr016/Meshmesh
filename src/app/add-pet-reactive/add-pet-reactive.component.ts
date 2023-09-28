import { Component ,Input} from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-add-pet-reactive',
  templateUrl: './add-pet-reactive.component.html',
  styleUrls: ['./add-pet-reactive.component.css']
})
export class AddPetReactiveComponent {
  addPetForm :FormGroup;

  constructor(){
    this.addPetForm = new FormGroup({
      petname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      
    })
  }
  submitAddPetForm() {
  
    
  }
}
