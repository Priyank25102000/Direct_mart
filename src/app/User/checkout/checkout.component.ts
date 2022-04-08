import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  toDisplay = true;
 
  checkout !: FormGroup;

  constructor(private routes :Router) { }

  ngOnInit(): void {
    
  }
   
  toggleData() {
    this.toDisplay = !this.toDisplay;
  }

}
