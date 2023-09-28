import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Seller } from '../interface/seller';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = 'https://retoolapi.dev/F9HyNa/data';
  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(this.url, {
      headers: {
        'Accept-language': 'en',
      }
      })
  }
  getProductDetails(id : Number) {
    return this.http.get(`${this.url}/${id}`);
  }
  addPet(petData : Seller){
    return this.http.post(this.url, {
      headers: {}
      })
  }
}
