import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  currentUser:any;
  isLogged:boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService:AuthenticationService) {}

  ngOnInit(){
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
