import { UserInterface } from './../interface/user-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = 'https://retoolapi.dev/lAurQ6/data';
  constructor(private http: HttpClient) { }

  getProductList() {
  
    return  this.http.get(this.url);
  }
  getProductDetails(id : Number) {
    return this.http.get(`${this.url}/${id}`);
  }
  addNewPet( petData:UserInterface){
    return   this.http.post(`${this.url}`,petData);
  }
  updateProduct(id: any, newData: any) {
    return this.http.put(`${this.url}/${id}`, newData);
  }
  
  deleteProduct(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
