import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class TransfereService {

    constructor(
    private router:Router,
  ) { }

  public grand_total : any;
  public total_item_price : any ;


  setGrandTotal(data: any){
      console.log("inside set total : " ,data);
      
    this.grand_total = data;
  }

  getGrandTotal(){
      console.log("inside get " , this.grand_total);
      
    let temp = this.grand_total;
    this.clearData();
    console.log("temp : " , temp);
    
    return temp;
  }

  clearData(){
    this.grand_total = undefined;
  }

  addProductPrice(price : any){
    this.total_item_price = this.total_item_price + price;
    console.log("this.total_item_price " ,this.total_item_price);
    
  }

  getTotalItemPrice(){
      console.log("this.total_item_price ~~> " , this.total_item_price);      
      let tmp = this.total_item_price ;
      this.total_item_price = 0;
      console.log("Tmp~~~~~~~~~~~~> " ,this.total_item_price);
      
      return tmp ;
  }

}