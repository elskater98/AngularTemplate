import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser:any;
  isLogged:boolean;

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.currentUser=this.authService.getCurrentUser();
    this.isLogged=this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
    this.currentUser=this.authService.getCurrentUser();
    this.isLogged=false;
    console.log('Logged out successfully.')
  }

}
