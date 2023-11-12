import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private searchResultsSource = new BehaviorSubject<any[]>([]);
  currentSearchResults = this.searchResultsSource.asObservable();

  updateSearchResults(results: any[]) {
    this.searchResultsSource.next(results);
  }
}
