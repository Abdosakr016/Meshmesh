import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { Idoctor } from './doctorclass';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Ivetcenter } from 'src/app/vets-center/interface/ivetcenter';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  AccessToken:any = localStorage.getItem('access_token');

  REST_API:string='http://localhost:8000/api/doctors';
  REST_API_mydoc:string='http://localhost:8000/api/mydoctors';
  REST_API_allmydoc:string='http://localhost:8000/api/allmydoctors';
  REST_API_delmydoc:string='http://localhost:8000/api/veterinary-centers/';



  header = new HttpHeaders().set("Authorization", `Bearer ${this.AccessToken}`);


  httpHeaders=new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient:HttpClient) { }

 addNewDoctor(data: FormData):Observable<any>{
  let API_URL=`${this.REST_API}`;
  return this.httpClient.post(API_URL,data)

 }
 get_doctors(){
  return this.httpClient.get(`${this.REST_API}`);
 }
 get_my_doctors(){
  return this.httpClient.get(`${this.REST_API_mydoc}`,{headers: this.header});
 }

//  get_my_doctors(){
//   return this.httpClient.get(`${this.REST_API_allmydoc}`);
//  }


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

   deleteDoctor(id:any,doctorId:any){
    let API_URL=`${this.REST_API_delmydoc}${id}/doctors/${doctorId}`;
    return this.httpClient.delete(API_URL,{headers: this.header})
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
