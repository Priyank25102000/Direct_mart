import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/User/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  watches = false;
  bags = false;
  shoes = false;
  products = true;

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
  



productList: Product[] = []
watchesList : Product [] = []
bagsList : Product [] = []
shoesList : Product [] = []

  constructor(private productService: ProductService ) { }
 

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
    this.watchesList = this.productService.getWatches()
    this.bagsList = this.productService.getbags()
    this.shoesList = this.productService.getshoes()

  }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}