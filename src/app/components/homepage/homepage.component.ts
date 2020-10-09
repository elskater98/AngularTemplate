import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userService: UserService,private authService:AuthenticationService) { }

  ngOnInit() {
    console.log(this.authService.getCurrentUser());
    /*this.userService.getUser("admin@admin.com").subscribe((res)=>{
      console.log(res);
    })*/
  }

}
