import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { TransfereService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  
  constructor(private cartservice :CartService ,
    private transferSErvice_ : TransfereService) { }

  
  public product :any =[];
  public grandtotal! :number;
  @Input() productlist = [];
    public globalGrandTotal : any;

  ngOnInit(): void {
    this.globalGrandTotal = this.transferSErvice_.getGrandTotal()
   
    this.grandtotal = this.cartservice.gettotalprice()
    console.log("ths.gran total : " , this.globalGrandTotal);
    
    
    this.cartservice.getproduct()
    .subscribe(res=>{
      this.product =res;
    
    })
    
  }

  getTotal(event : any){
    console.log("event : " , event);
    
  }
}