import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, Subject } from 'rxjs';
import { IAuthResponse } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus: Subject<IAuthResponse | null> = new Subject();  

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private jwtHelper: JwtHelperService) {
    this.authStatus.subscribe(auth => {
      if(!auth) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return;
      }

      console.log("AUTHUSER", auth.user)
      localStorage.setItem('user', JSON.stringify(auth.user));
      localStorage.setItem('token', auth.token);
    })
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token || '');
  }

  async signIn(data: {email: string, password: string}): Promise<boolean> {
    const $auth = this.httpClient.post<IAuthResponse>('/BACKEND/signin', data);
    const response = await firstValueFrom($auth);
    if(response?.error) {
      this.toastr.error(response.error)
      return false;
    }

    this.authStatus.next(response);
    return true;
  }

  async signup() {
    const $auth = this.httpClient.get<IAuthResponse>('/BACKEND/signup');
    const response = await firstValueFrom($auth);

    
  }

  signOut() {
    this.authStatus.next(null);
  }
}