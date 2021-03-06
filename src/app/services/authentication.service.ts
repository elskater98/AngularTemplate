import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = environment.urlConf;

  constructor(private http: HttpClient,private router:Router) { }

  login(email:string, password:string): Observable<any> {
  return this.http.get(this.url+'/auth',{params:{
      email:email,
      password:password
    }}).pipe(
      map(data => {
        return new User(data);
      }))
  }

  getProfile(credentials):Observable<any>{
    return this.http.get(this.url+'/auth/profile',{params:{token:credentials}});
  }

  setProfile(credentials){
    this.getProfile(credentials).subscribe((user)=>{
      this.storeCurrentUser(user);
    });
    this.router.navigate(['']).then(()=>{
      window.location.reload();
    });
  }

  storeCurrentUser(user:User){
    localStorage.setItem('currentUser',JSON.stringify(user))
  }

  logout():void{
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): User {
    return new User(JSON.parse(localStorage.getItem('currentUser')));
  }

  isUserInRole(role: string): boolean {
    const user: User = this.getCurrentUser();
    return user.roles.includes(role);
  }



}
