import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import { Ipet } from '../interface/Ipet';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = 'http://localhost:8000/api/pets';

  // Define HttpHeaders as a constant
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(this.url, { headers: this.httpHeaders });
  }

  getProductDetails(id: Number) {
    return this.http.get(`${this.url}/${id}`, { headers: this.httpHeaders });
  }

  addNewPet(petData: Ipet) {
    return this.http.post(this.url, petData, { headers: this.httpHeaders });
  }

  updateProduct(id: any, newData: any) {
    return this.http.put(`${this.url}/${id}`, newData, { headers: this.httpHeaders });
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.url}/${id}`, { headers: this.httpHeaders });
  }

}
