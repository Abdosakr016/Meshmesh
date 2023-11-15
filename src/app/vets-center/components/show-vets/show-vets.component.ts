import { Component } from '@angular/core';
import { ApiVetCenterService } from '../../services/api-vet-center.service';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-show-vets',
  templateUrl: './show-vets.component.html',
  styleUrls: ['./show-vets.component.css']
})
export class ShowVetsComponent {
  vets :any;
    constructor(private apiService:ApiVetCenterService,private el: ElementRef){}
      ngOnInit(){
        this.apiService.getProductList().subscribe(((data: any) => (this.vets = data['data'])),
        (error) => console.log(error),
        () => console.log("COMPLETE"))
      }
      scrollToSection() {
        const element = this.el.nativeElement.querySelector('#here');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
}
