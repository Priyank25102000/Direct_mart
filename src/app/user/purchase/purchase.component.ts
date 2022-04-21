import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  
click(){
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

}
