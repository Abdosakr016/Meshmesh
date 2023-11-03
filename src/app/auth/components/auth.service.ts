import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(registerData:any):Observable<any>
  {
    return this.http.post('http://localhost:8000/api/register' ,registerData ) ;
  } 
  login(loginData:any):Observable<any>
  {
    return this.http.post('http://localhost:8000/api/login' ,loginData ) ;
  } 
  logout(loginData:any):Observable<any>
  {
    return this.http.post('http://localhost:8000/api/login' ,loginData ) ;
  } 
}
