import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderitemService {

  constructor(private http: HttpClient) { }
  private urlorderitem = 'http://localhost:8000/api/orders_items';

  // Define HttpHeaders as a constant
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  getOrderItem(id: Number) {
    return this.http.get(`${this.urlorderitem}`, { headers: this.httpHeaders });
  }

  createOrderItem(newOrder: any) { 
    //   const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + localStorage.getItem('access_token')
    // });
      return this.http.post(`${this.urlorderitem}`, newOrder, { headers: this.httpHeaders });
    }

    getOneOrderitem(id: string) { 
      //   const headers = new HttpHeaders({
      //   Authorization: 'Bearer ' + localStorage.getItem('access_token')
      // });
        return this.http.post(`${this.urlorderitem}/${id}`, { headers: this.httpHeaders });
      }


      deleteOneOrderitem(id: string) {
        return this.http.delete(`${this.urlorderitem}/${id}`, { headers: this.httpHeaders });
      }
}
