import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 exform !: FormGroup;

  ngOnInit(): void {

    this.exform = new FormGroup({
     'email' : new FormControl(null, [Validators.required, Validators.email]),
     'username' : new FormControl(null, Validators.required),
     'password' : new FormControl(null, Validators.required),
    });
  }

}
