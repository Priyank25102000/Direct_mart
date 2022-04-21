import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  public totalitem :number =0;
  public searchTerm:string ='';

  constructor(private cartservice :CartService) { }

  ngOnInit(): void {
    this.cartservice.getproduct()
    .subscribe(res =>{
      this.totalitem = 0;

    })
  }

  search(event :any){
    this.searchTerm= (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);

  }

}
