import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from  '@angular/common/http';
import { Ivetcenter } from  '../interface/ivetcenter'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiVetCenterService {
  url : string = 'http://127.0.0.1:8000/api/VeterinaryCenters/';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getProductList() {

    return  this.httpClient.get(`${this.url}`);
  }
  getProductDetails(id : Number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  addNewPet( petData:Ivetcenter){
    return   this.httpClient.post(`${this.url}`,petData);
  }
  updateProduct(id: any, newData: Ivetcenter) {
    return this.httpClient.put(`${this.url}/${id}`, newData);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.url}${id}`, { headers: this.httpHeaders });
  }

  getVetDetails(id: Number) {
    return this.httpClient.get(`${this.url}${id}`, { headers: this.httpHeaders });
  }
  addNewVet(vetData: FormData) {
    return this.httpClient.post<Ivetcenter>(`${this.url}`,vetData);
  }
  updateVet(id: any, newData: any){
    // newData.append('_method', 'PUT');
    return this.httpClient.put(`${this.url}${id}`, newData , { headers: this.httpHeaders });
  }
}
