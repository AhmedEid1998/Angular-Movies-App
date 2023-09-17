import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.setUserData();
    }
  }

  userData = new BehaviorSubject(null);
  register(userData: object): Observable<any> {
    // return this._HttpClient.post('https://route-ecommerce-app.vercel.app/api/v1/auth/signup' , userData)
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    );
    // https://ecommerce.routemisr.com/api/v1/auth/signup
  }

  login(userData: object): Observable<any> {
    // return this._HttpClient.post('https://route-ecommerce-app.vercel.app/api/v1/auth/signin' , userData)
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      userData
    );
    // https://route-ecommerce-app.vercel.app/api/v1/auth/signin
    // https://ecommerce.routemisr.com/api/v1/auth/signin
  }

  setUserData(): void {
    let endecodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(endecodedToken);
    this.userData.next(decodedToken);
  }
  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
