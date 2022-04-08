import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  constructor() {}
    checkUserEmailandPassword(email:string , password:string)
    {
      if(email == "user123@gmail.com" && password == "User@1234"){
        localStorage.setItem('email','password');
      return true;
   }
   else{
     return false;
   }
}

}