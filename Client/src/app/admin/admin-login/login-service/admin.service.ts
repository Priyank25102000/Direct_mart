import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor() {}
    checkAdminEmailandPassword(aemail:string , apassword:string)
    {
      if(aemail == "admin123@gmail.com" && apassword == "Admin@1234"){
        localStorage.setItem('aemail','apassword');
      return true;
   }
   else{
     return false;
   }
}

}