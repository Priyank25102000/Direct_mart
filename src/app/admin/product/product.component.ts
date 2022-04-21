import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { productmodel } from './product.model';
import { ProductService } from 'src/app/service/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

formvalue! :FormGroup;
productdata ! :any;
productmodelobj :productmodel =new productmodel();

  
  constructor(private formbuilder :FormBuilder ,private api :ProductService ,private http:HttpClient) { }

  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      productName :[''],
      productPrice :[''],
      productDescription :[''],
      url :['']

    })
    this.getallproduct();
    
  }

  
  
  postproductdetails(){
    this.productmodelobj.productName =this.formvalue.value.productName;
    this.productmodelobj.productPrice =this.formvalue.value.productPrice;
    this.productmodelobj.productDescription =this.formvalue.value.productDescription;
    this.productmodelobj.url =this.formvalue.value.url;


  this.api.postdata(this.productmodelobj)
  .subscribe(res =>{
    console.log(res);
    alert("product added successfully")
    let ref= document.getElementById('cancel')
    ref?.click()
    this.formvalue.reset();
    this.getallproduct();
  },
  err=>{
    alert("somthing went wrong ")
  })
  
  }
  getallproduct(){
    this.api.getdata()
    .subscribe(res=>{
      this.productdata=res;
    })
  }

  ondeleteproduct(row : any){
    this.api.deleteproduct(row.id)
    .subscribe(res=>{
      alert("product deleted");
      this.getallproduct();
    })
  }

  url !:"";
  onselectfile(e :any){
    if(e.target.files){
      var reder =new FileReader();
      reder.readAsDataURL(e.target.files[0])
      reder.onload =(event :any)=>{
        this.url =event.target.result;

      }
    }

  }

 
  onedit(row :any){
    this.productmodelobj.id=row.id;
    this.formvalue.controls['productName'].setValue(row.productName);
    this.formvalue.controls['productPrice'].setValue(row.productPrice);
    this.formvalue.controls['productDescription'].setValue(row.productDescription);
    this.formvalue.controls['url'].setValue(row.url);

  }
  
  updateproductdetails(){
    this.productmodelobj.productName =this.formvalue.value.productName;
    this.productmodelobj.productPrice =this.formvalue.value.productPrice;
    this.productmodelobj.productDescription =this.formvalue.value.productDescription;
    this.productmodelobj.url =this.formvalue.value.url;


    this.api.upadatproduct(this.productmodelobj,this.productmodelobj.id)
    .subscribe(res=>{
      alert("updated successfully");
      let ref= document.getElementById('cancel')
      ref?.click()
      this.formvalue.reset();
      this.getallproduct();
      // this.formvalue.reset();
    })

  }

  
}