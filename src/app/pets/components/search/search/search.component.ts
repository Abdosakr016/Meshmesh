import { Component } from '@angular/core';
import { SharedService } from 'src/app/pets/services/shared service/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResults: any[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
  
    this.sharedService.currentSearchResults.subscribe(
      (results) => (this.searchResults = results)
      
    );
    console.log(this.searchResults)
  }
  generateImageUrl(image: string) {
    return `http://localhost:8000/storage/${image}`;
  } 
}
