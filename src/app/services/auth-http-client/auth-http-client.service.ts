import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpClientService {

  token: string;

  constructor(private httpClient: HttpClient) { 
    this.token = localStorage.getItem('token') || '';
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(url, body, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(url, body, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url, {headers: {
      Authorization: `Bearer ${this.token}`
    }})
  }
}
