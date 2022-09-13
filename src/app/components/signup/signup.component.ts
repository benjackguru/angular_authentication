import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  @ViewChild('confirmPassword', { static: false })
  confirmPassword!: ElementRef;

  UserRegistrationForm : FormGroup

  constructor( public apicallService:ApicallService, public router:Router) { 
    this.UserRegistrationForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  
  OnSubmit() {
    if(this.UserRegistrationForm.valid && this.UserRegistrationForm.value)
    console.log('User form value is', this.UserRegistrationForm.value);
    this.apicallService.registerUser(this.UserRegistrationForm.value).subscribe(res =>{
      if(res && res['status'] ==='ok' && res['data']['_id']){
        this.router.navigate(['/login'])
      }
    },(err)=>{
      if(err) {
        console.log('something went wrong in signup')
      }
    })
  }

}
