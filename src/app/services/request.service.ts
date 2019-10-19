import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private order = new BehaviorSubject<Array<object>>([]);
  public listOrder = this.order.asObservable();
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<object[]>("https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos");
  }

  public addOrder(order: Array<object>): void {
    this.order.next(order);
  }
}
