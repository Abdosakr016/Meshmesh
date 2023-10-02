import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  cartValue = new BehaviorSubject<number>(0)

  getCounterVal(){
    return this.cartValue.asObservable()
  }


  setCartValue(val: number){
    return this.cartValue.next(val)
  }
}