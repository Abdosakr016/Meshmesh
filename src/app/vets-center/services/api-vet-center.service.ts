import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from  '@angular/common/http';
import { Ivetcenter } from  '../interface/ivetcenter'
import { Iappoint } from '../interface/iappoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiVetCenterService {
  url : string = 'http://127.0.0.1:8000/api/VeterinaryCenters/';
  urlAppoint : string = 'http://127.0.0.1:8000/api/appointment/';
  urlAccept : string = 'http://127.0.0.1:8000/api/accept/';
  urlReject : string = 'http://127.0.0.1:8000/api/reject/';

  AccessToken:any = localStorage.getItem('access_token');
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  httpHeadersToken = new HttpHeaders().set('Authorization', `Bearer ${this.AccessToken}`);

  header = new HttpHeaders().set("Authorization", `Bearer ${this.AccessToken}`);

  constructor(private httpClient: HttpClient) { }

  // getTransferIp() {

  //   let header = new HttpHeaders().set(

  //     "Authorization", this.AccessToken);


  //   return this.httpClient.get("http://127.0.0.1:8000/api/accept/", {headers: this.httpHeadersToken});
  // }

  acceptmail(){
    return  this.httpClient.get(`${this.urlAccept}`, {headers: this.header});
  }

  rejectmail(){
    return  this.httpClient.get(`${this.urlReject}`, {headers: this.header});
  }


  getProductList() {
    return  this.httpClient.get(`${this.url}`);
  }

  getAppointList() {
    return  this.httpClient.get(`${this.urlAppoint}`, {headers: this.header});
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
    return this.httpClient.put(`${this.url}${id}`, newData , { headers: this.httpHeaders });
  }

  addAppointment( AppData:Iappoint){
    return this.httpClient.post(`${this.urlAppoint}`,AppData);
  }
}
