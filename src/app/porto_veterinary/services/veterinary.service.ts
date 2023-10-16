import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {
 veturl = 'https://retoolapi.dev/uRwiMx/data';
 
 Doctorurl = 'https://retoolapi.dev/SLse87/data';
  constructor(private http:HttpClient) { }

  addVeterinary(vetData: any){
    return this.http.post(this.veturl,vetData)
  }
  get_doctors(){
    return  this.http.get(this.Doctorurl);
  }
  addNewDoctor( doctorData: any){
    return 	this.http.post(this.Doctorurl,doctorData)
  }
  updatDoctor(){

  }
deleteDoctor(id: string){
  return this.http.delete(`${this.Doctorurl}/${id}`);
}
}
