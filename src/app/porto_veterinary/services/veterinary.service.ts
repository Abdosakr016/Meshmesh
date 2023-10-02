import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {
 veturl = 'https://retoolapi.dev/uRwiMx/data';
  constructor(private http:HttpClient) { }

  addVeterinary(vetData: any){
    return this.http.post(this.veturl,vetData)
  }
}
