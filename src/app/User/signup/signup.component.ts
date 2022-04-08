import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 signupForm !: FormGroup;

  ngOnInit(): void {

    this.signupForm = new FormGroup({
     'email' : new FormControl(null, [Validators.required, Validators.email]),
     'username' : new FormControl(null,[Validators.required,Validators.minLength(5)]),
     'password' : new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$')]),
     'cpassword' : new FormControl(null, Validators.required)
    });
  }
 
  clicksub(){
    console.log(this.signupForm.value)
  }

   get username(){
     return this.signupForm.get('username')
   }

   get email(){
   return this.signupForm.get('email')
   }

   get password(){
    return this.signupForm.get('password')
    }

    get cpassword(){
      return this.signupForm.get('cpassword')
      }
 

}
