import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.urlConf;
  private currentUser = this.authService.getCurrentUser();

  constructor(private http: HttpClient,private authService:AuthenticationService) { }

  getAllUsers():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        authorization:this.currentUser.token
      })
    }
    return this.http.get(this.url+'/user',httpOptions)
  }

  getUser(email):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        authorization:this.currentUser.token
      })
    }
    return this.http.get(this.url+'/user/'+email,httpOptions)
  }

  createUser(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        authorization:this.currentUser.token
      })
    }
    return this.http.post(this.url+'/user',user,httpOptions)
  }

  //TODO:Reset Password
  //TODO: Update User
  //TODO: Delete User



}
