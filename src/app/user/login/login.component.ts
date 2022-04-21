import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from './services/myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {


  constructor(private service : MyserviceService, private routes :Router){

  }
msg!:string;


  loginForm !: FormGroup;
  fieldTextType !: boolean;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
     'email' : new FormControl(null, [Validators.required, Validators.email]),
     'password' : new FormControl(null, [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$')]),
    });
  }
 

   get email(){
   return this.loginForm.get('email')
   }

   get password(){
    return this.loginForm.get('password')
    }

  check(email:string , password:string){
    var output = this.service.checkUserEmailandPassword(email,password);
    if (output == true){
      this.routes.navigate(['/home']);
    }
    else{
      this.msg = 'Invalid email or password'
    }
  }
  
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


}
