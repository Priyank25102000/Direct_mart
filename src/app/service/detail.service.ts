import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  public detaillist :any =[]
  public productlist=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");


  constructor() { }

  getproduct(){
    return this.productlist.asObservable();
  }



  addtoproduct(product :any){
  this.detaillist.push(product);
  this.productlist.next(this.detaillist);
//   console.log(this.cartitemlist)
  }
}