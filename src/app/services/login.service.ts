import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  actionUrl: string = environment.baseUrl;

  constructor(private http : HttpClient ) {}
  register(registerForm) {
    return this.http.post(this.actionUrl+'/api/Login/register',registerForm);
  }
  UserLogin(LoginForm) {
    return this.http.post(this.actionUrl+'/api/Login',LoginForm);
  }
}
