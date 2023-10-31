import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {
 veturl = 'https://retoolapi.dev/uRwiMx/data';
 
 Doctorurl = 'http://localhost:8000/api/doctors';
 private httpHeaders: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});

  constructor(private http:HttpClient) { }

  addVeterinary(vetData: any){
    return this.http.post(this.veturl,vetData,{ headers: this.httpHeaders });
  }
  get_doctors(){
    return  this.http.get(this.Doctorurl,{ headers: this.httpHeaders });
  }
  addNewDoctor( doctorData: any){
    return 	this.http.post(this.Doctorurl,doctorData,{ headers: this.httpHeaders });
  }
  updatDoctor(){

  }
deleteDoctor(id: string){
  return this.http.delete(`${this.Doctorurl}/${id}`,{ headers: this.httpHeaders });
}
}
