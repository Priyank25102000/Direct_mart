import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { DetailService } from 'src/app/service/detail.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  public productlist :any;

  constructor(private detailservice : DetailService,
    private cartservice : CartService) { }
  ngOnInit(): void {
    this.detailservice.getproduct()
    .subscribe(res=>{
      this.productlist = res;
    })
  }
  addtocart(item :any){
    this.cartservice.addtocart(item);
    }
  }
