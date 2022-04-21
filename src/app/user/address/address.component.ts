import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  address = true;
  edite_address = false;

  constructor() {
   
    
   }

  ngOnInit(): void {
  }

  editebtn(){
    this.address = false;
    this.edite_address = true
   }

}
