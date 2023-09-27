import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
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
  updateProduct(id: string, newData: any) {
    return this.http.put(`${this.url}/${id}`, newData);
  }
  
  
}
