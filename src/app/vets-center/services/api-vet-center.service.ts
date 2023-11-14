import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from  '@angular/common/http';
import { Ivetcenter } from  '../interface/ivetcenter'
import { Iappoint } from '../interface/iappoint';
import { Observable,forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiVetCenterService {
  url : string = 'http://127.0.0.1:8000/api/VeterinaryCenters/';
  urlmycenter : string = 'http://127.0.0.1:8000/api/mycenter/';
  urlAppoint : string = 'http://127.0.0.1:8000/api/appointment/';
  urlAccept : string = 'http://127.0.0.1:8000/api/accept/';
  urlReject : string = 'http://127.0.0.1:8000/api/reject/';
  urlupdateAccept : string = 'http://127.0.0.1:8000/api/updateaccept/';
  urlupdatereject : string = 'http://127.0.0.1:8000/api/updatereject/';

  AccessToken:any = localStorage.getItem('access_token');
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  httpHeadersupdate = new HttpHeaders().set('Accept', 'application/json');

  httpHeadersToken = new HttpHeaders().set('Authorization', `Bearer ${this.AccessToken}`);

  header = new HttpHeaders().set("Authorization", `Bearer ${this.AccessToken}`);

  constructor(private httpClient: HttpClient) { }

  acceptmail(id : number){
    const updateAcceptRequest = this.httpClient.get(`${this.urlupdateAccept}${id}`);
    const acceptRequest = this.httpClient.get(`${this.urlAccept}`, { headers: this.header });

    // Use forkJoin to combine multiple observables
    return forkJoin([updateAcceptRequest, acceptRequest]);
  }

  rejectmail(id: number){
    const updateAcceptRequest = this.httpClient.get(`${this.urlupdatereject}${id}`);
    const rejectRequest = this.httpClient.get(`${this.urlReject}`, { headers: this.header });

    // Use forkJoin to combine multiple observables
    return forkJoin([updateAcceptRequest, rejectRequest]);

  }

  getmyvet() {
    return  this.httpClient.get(`${this.urlmycenter}`, {headers: this.header});
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

  updateVet(id: any, vetData: FormData){
    return this.httpClient.post(`${this.url}${id}`, vetData , { headers: this.httpHeadersupdate });
  }

  addAppointment( AppData:Iappoint){
    return this.httpClient.post(`${this.urlAppoint}`,AppData);
  }

  deleteAppointList(id : number) {
    return  this.httpClient.delete(`${this.urlAppoint}${id}`, {headers: this.header});
  }
}
