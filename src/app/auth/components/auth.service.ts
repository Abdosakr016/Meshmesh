import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi = 'http://localhost:8000/api';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http:HttpClient) { }

  signUp(registerData:any):Observable<any>
  {
    return this.http.post('http://localhost:8000/api/register' ,registerData , { headers: this.httpHeaders });
  } 
  login(loginData:any):Observable<any>
  {
    return this.http.post('http://localhost:8000/api/login' ,loginData , { headers: this.httpHeaders });
  } 

  getUserData(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.get(`${this.urlApi}/user`, { headers });
  }
  logout() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token'), // Include the access token in the headers
    });

    return this.http.post(`${this.urlApi}/logout`, null, { headers });
  }
  updateUserData(userData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'), 
    });
  
    // Do not include userData in headers; instead, pass it in the request body
    return this.http.put(`${this.urlApi}/update_user`, userData, { headers });
  }
  
}
