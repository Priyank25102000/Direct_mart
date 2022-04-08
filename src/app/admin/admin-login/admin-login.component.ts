import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './login-service/admin.service';




@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [AdminService]
})
export class AdminLoginComponent  {

  login !: FormGroup;
  msg!:string;


  constructor(private service :AdminService, private routes :Router){}



  ngOnInit(): void {

    this.login = new FormGroup({
     'aemail' : new FormControl(null, [Validators.required,Validators.email]),
     'apassword' : new FormControl(null, [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$')]),
    });
  }
 

   get aemail(){
   return this.login.get('aemail')
   }

   get apassword(){
    return this.login.get('apassword')
    }
    
    check(aemail:string , apassword:string){
      var output = this.service.checkAdminEmailandPassword(aemail,apassword);
      if (output == true){
        this.routes.navigate(['/admin-panel']);
      }
      else{
        this.msg = 'Invalid email or password'
      }
    }
}


