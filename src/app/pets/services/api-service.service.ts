import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Ipet } from '../interface/Ipet';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = 'https://retoolapi.dev/ynC84L/data';
  constructor(private http: HttpClient) { }

  getProductList() {
  
    return  this.http.get(this.url);
  }
  getProductDetails(id : Number) {
    return this.http.get(`${this.url}/${id}`);
  }
  addNewPet( petData:Ipet){
    return   this.http.post(`${this.url}`,petData);
  }
  updateProduct(id: any, newData: any) {
    return this.http.put(`${this.url}/${id}`, newData);
  }
  
  deleteProduct(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
  
}
