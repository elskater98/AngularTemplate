import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }

  login(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((credentials)=>{
      this.authService.setProfile(credentials.token);
      console.log('Successfully logged in.');
    },(error) => {
      console.log(error);
      this.matSnackBar.open(error.statusText+' ('+error.status+')','Close',{duration:2000})
    })
  }

}
