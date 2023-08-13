// mock-backend.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService {
  private users: User[] = [
    { email: 'test@example.com', password: 'password' }
  ];

  authenticate(user: User): Observable<boolean> {
    const foundUser = this.users.find(u => u.email === user.email && u.password === user.password);
    return of(!!foundUser); // Return true if user is found, false otherwise
  }
}
