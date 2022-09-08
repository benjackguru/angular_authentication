import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  @ViewChild('confirmPassword', { static: false })
  confirmPassword!: ElementRef;

  UserRegistrationForm : FormGroup

  constructor() { 
    this.UserRegistrationForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  
  OnSubmit() {
    //if(this.UserRegistrationForm.valid && this.UserRegistrationForm.value)
    console.log('User form value is', this.UserRegistrationForm.value);
  }

}
