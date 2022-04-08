import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 
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


  productList1 : Product [] = []
  productList2 : Product [] = []
  productList3 : Product [] = []

  tabIndex=0;
  onTabClick(index:any){
    this.tabIndex=index;
  }


  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productList1 = this.productService.getProductsForShop1()
    this.productList2 = this.productService.getProductsForShop2()
    this.productList3 = this.productService.getProductsForShop3()

  }

}