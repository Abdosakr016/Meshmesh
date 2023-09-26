import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../interface/seller';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() seller !: Seller;
  constructor(private router : Router){}
}
