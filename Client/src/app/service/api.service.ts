import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getproduct(){
   return  this.http.get<any>("http://localhost:3000/users")
  .pipe(map((res :any)=>{
    return res;
  }))
  }

  getbag(){
    return  this.http.get<any>("http://localhost:3000/bag")
   .pipe(map((res :any)=>{
     return res;
   }))
   }


  getshoes(){
    return  this.http.get<any>("http://localhost:3000/shoe")
   .pipe(map((res :any)=>{
     return res;
   }))
   }

   getwatches(){
    return  this.http.get<any>("http://localhost:3000/watch")
   .pipe(map((res :any)=>{
     return res;
   }))
   }


  

}
