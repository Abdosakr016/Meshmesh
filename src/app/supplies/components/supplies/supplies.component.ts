import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { SuppliesService } from '../../services/supplies.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {
  allSupplies: any
  constructor(private renderer: Renderer2, private el: ElementRef,private suppliesService:SuppliesService) {}

  ngOnInit(): void {


    this.handelGrid()
 
    this.getAllSuppliesData();
  }
  

  getAllSuppliesData() {
    this.suppliesService.getAllSupplies().subscribe((data) => {
      this.allSupplies=data
      console.log(data); // You can replace this with how you want to use the data.
    });
  }
  handelGrid(){
    const listButton = this.el.nativeElement.querySelector('#list');
    const gridButton = this.el.nativeElement.querySelector('#grid');
    const productItems = this.el.nativeElement.querySelectorAll('#products .item');

    if (listButton && gridButton) {
      listButton.addEventListener('click', (event: Event) => { // Specify Event type
        event.preventDefault();
        productItems.forEach((item: HTMLElement) => { // Specify HTMLElement type
          this.renderer.addClass(item, 'list-group-item');
          this.renderer.removeClass(item, 'grid-group-item');
        });
      });

      gridButton.addEventListener('click', (event: Event) => { // Specify Event type
        event.preventDefault();
        productItems.forEach((item: HTMLElement) => { // Specify HTMLElement type
          this.renderer.removeClass(item, 'list-group-item');
          this.renderer.addClass(item, 'grid-group-item');
        });
      });
    }
  }
}
