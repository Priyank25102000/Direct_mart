import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/User/services/product.service';


@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  watches = false;
  bags =  false;
  shoes = false;

  Data1(){
    this.watches= true;
    this.bags=false;
    this.shoes=false;
}

Data2(){
  this.watches= false;
  this.bags= true;
  this.shoes= false;
}


Data3(){
  this.watches= false;
  this.bags= false;
  this.shoes=true
}

  watchesList : Product [] = []
  bagsList : Product [] = []
  shoesList : Product [] = []

  constructor(private productService : ProductService) { }


  ngOnInit(): void {
    this.watchesList = this.productService.getWatches()
    this.bagsList = this.productService.getbags()
    this.shoesList = this.productService.getshoes()


  }
}
