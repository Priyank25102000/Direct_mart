import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { DetailService } from 'src/app/service/detail.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public productlist :any;
  public page1list :any;
  public page2list :any;
  public page3list :any;
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

constructor(private api :ApiService ,private cartservice :CartService,
  private router:Router,private detailservice : DetailService,) { }

ngOnInit(): void {
  this.api.getproduct()
  .subscribe(res =>{
    this.productlist =res;

    this.productlist.forEach((a :any) => {
      Object.assign(a,{quantity :1,total :a.price});
      
    });
  });

  this.api.getpage1()
  .subscribe(res =>{
    this.page1list =res;

    this.page1list.forEach((a :any) => {
      Object.assign(a,{quantity :1,total :a.price});
      
    });
  });


  this.api.getpage2()
  .subscribe(res =>{
    this.page2list =res;

    this.page2list.forEach((a :any) => {
      Object.assign(a,{quantity :1,total :a.price});
      
    });
  });


  this.api.getpage3()
  .subscribe(res =>{
    this.page3list =res;

    this.page3list.forEach((a :any) => {
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
addtoproduct(item :any){
  this.detailservice.addtoproduct(item);
  this.router.navigateByUrl('/product-single');
  
 
  }


  tabIndex=0;
  onTabClick(index:any){
    this.tabIndex=index;
  }



}