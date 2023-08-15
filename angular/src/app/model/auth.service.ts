// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root'})
export class AuthService {
  private baseUrl = 'http://localhost:3100'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    // Implement API call to register user
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    // Implement API call to log in user
    return this.http.post(`${this.baseUrl}/login`, user);
  }
}
