import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { DetailService } from 'src/app/service/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productlist :any;
  public baglist :any;
  public shoeslist :any;
  public watcheslist :any;


  searchKey :string="";
  products = true;
  watches = false;
  bags = false;
  shoes = false;


  Data1(){
    this.watches= true;
    this.bags=false;
    this.shoes=false;
    this.products = false;
}

Data2(){
  this.watches= false;
  this.bags= true;
  this.shoes= false;
  this.products = false;
}


Data3(){
  this.watches= false;
  this.bags= false;
  this.shoes=true;
  this.products = false;
}


  constructor(private api :ApiService ,private cartservice :CartService, private detailservice : DetailService,
    private router : Router) { }

  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res =>{
      this.productlist =res;

      this.productlist.forEach((a :any) => {
        Object.assign(a,{quantity :1,total :a.price});
        
      });
    });

  

  this.api.getbag()
  .subscribe(res =>{
    this.baglist =res;

    this.baglist.forEach((a :any) => {
      Object.assign(a,{quantity :1,total :a.price});
      
    });
  });



this.api.getshoes()
  .subscribe(res =>{
    this.shoeslist =res;

    this.shoeslist.forEach((a :any) => {
      Object.assign(a,{quantity :1,total :a.price});
      
    });
  });


this.api.getwatches()
  .subscribe(res =>{
    this.watcheslist =res;

    this.watcheslist.forEach((a :any) => {
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

  
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}