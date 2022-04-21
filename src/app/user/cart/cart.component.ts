import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { TransfereService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product: any = [];
  public grandtotal!: number;
  @Output() buttonClicked = new EventEmitter();
  globalrandTotal: any;


  constructor(
    private cartservice: CartService,
    private router: Router,
    private transferService_: TransfereService) { }


  ngOnInit(): void {

    this.globalrandTotal = this.transferService_.getGrandTotal()
    console.log("~~~> ", this.globalrandTotal);

    this.cartservice.getproduct()
      .subscribe(res => {
        this.product = res;       
        this.grandtotal = this.cartservice.gettotalprice();
       

      })



    console.log("this.grandtotal ", this.grandtotal);

  }

  removeitem(item: any) {
    this.cartservice.removecartitem(item);
  }

  emptycart() {
    this.cartservice.removeall();

  }
  inc(item: any) {
    item.quantity += 1;
    this.grandtotal += item.price;
   

        
  }

  dec(item: any) {
    if (item.quantity != 1) {
      item.quantity -= 1;
      this.grandtotal -= item.price;
     

    }
  }

  makePayment(event: any) {
    console.log("make payment ", this.grandtotal);
    this.transferService_.setGrandTotal(this.grandtotal);
    this.router.navigateByUrl('/checkout');

  }
}
