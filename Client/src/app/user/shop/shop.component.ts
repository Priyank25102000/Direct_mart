import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public productlist :any;
  searchKey :string="";
  
  Page1 = true;
  Page2 = false;
  Page3 = false;

  Data1(){
    this.Page1= true;
    this.Page2=false;
    this.Page3=false;
}

Data2(){
  this.Page1= false;
  this.Page2= true;;
  this.Page3= false;
}


Data3(){
  this.Page1= false;
  this.Page2= false;
  this.Page3=true
}

constructor(private api :ApiService ,private cartservice :CartService) { }

ngOnInit(): void {
  this.api.getproduct()
  .subscribe(res =>{
    this.productlist =res;

    this.productlist.forEach((a :any) => {
      Object.assign(a,{quantity :1,total :a.price});
      
    });
  });
  this.cartservice.search.subscribe((val:any)=>{
    this.searchKey=val;
  })
}

addtocart(item :any){
this.cartservice.addtocart(item);

}




  tabIndex=0;
  onTabClick(index:any){
    this.tabIndex=index;
  }



}