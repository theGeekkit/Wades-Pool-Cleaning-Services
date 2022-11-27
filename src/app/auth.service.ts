import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authService: AuthService, private router:
    Router, private formBuilder: FormBuilder ) { }


  public signIn(userData: User) {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }


  authForm: FormGroup;
  isSubmitted = false;


  get formControls() { return this.authForm.controls; }

  signIn(){
    this.isSubmitted = true;
    if(this.authForm.invalid){
      return;
    }
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/admin');
  }
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
