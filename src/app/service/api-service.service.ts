import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Seller } from '../interface/seller';
import { environment } from 'src/environments/environment';
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
  getProductDetails(id : string) {
    return this.http.get(`${this.url}/${id}`);
  }
  addPet(data : any){
    return this.http.post(`${environment.baseURL}` , data , {
      params : {},
      headers: {}
    })
  }
  }
