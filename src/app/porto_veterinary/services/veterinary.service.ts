import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { Idoctor } from './doctorclass';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  REST_API:string='http://localhost:8000/api/doctors';

  httpHeaders=new HttpHeaders().set('Content-Type','application/json');


 veturl = 'https://retoolapi.dev/uRwiMx/data';
 
//  Doctorurl = 'https://retoolapi.dev/SLse87/data';
  constructor(private httpClient:HttpClient) { }

  addVeterinary(vetData: any){
    return this.httpClient.post(this.veturl,vetData)
  }
  
 addNewDoctor(data: FormData):Observable<any>{
  let API_URL=`${this.REST_API}`;
  return this.httpClient.post(API_URL,data)

 }
 get_doctors(){
  return this.httpClient.get(`${this.REST_API}`);
 }

 getOneDoctor(id: any){
  let API_URL=`${this.REST_API}/${id}`;
  return this.httpClient.get(API_URL,{headers:this.httpHeaders})
  
  .pipe(map((res:any)=>{
    return res ||{}
  }
  ),
    catchError(this.handleError))

 }
 
  updatDoctor(id:any,data:FormData){
    let API_URL=`${this.REST_API}/${id}`;
    return this.httpClient.post(API_URL,data,{headers: this.httpHeaders})
   }

 

   deleteDoctor(id:any){
    let API_URL=`${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL,{headers: this.httpHeaders})
    
    
  
   }
   handleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;
    }
    else{
      errorMessage=`Error Code:${error.status}\n Message:${error.message}`
    }
    return throwError(errorMessage);
   }



// deleteDoctor(id: string){
//   return this.httpClient.delete(`${this.Doctorurl}/${id}`);
// }



// get_doctors(){
  //   return  this.httpClient.get(this.Doctorurl);
  // }
  // addNewDoctor( doctorData: any){
  //   return 	this.httpClient.post(this.Doctorurl,doctorData)
  // }
}
