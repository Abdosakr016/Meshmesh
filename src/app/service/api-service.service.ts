import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Iproduct } from '../interface/Iproduct';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = 'https://retoolapi.dev/uRwiMx/data';
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
  addPet(petData : Iproduct){
    return this.http.post(this.url, {
      headers: {}
      })}
  updateProduct(id: string, newData: any) {
    return this.http.put(`${this.url}/${id}`, newData);
  }
  
  deleteProduct(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
