import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { RegistrationService } from './registration.service';
import { AuthService } from 'src/app/model/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends BasePageComponent implements OnInit {

  public error: string;
  public user: User;

  constructor(route: ActivatedRoute, router: Router, private authService: AuthService) {
    super(route);
    this.error = '';
    this.user = new User();
  }

  override ngOnInit(): void {
    // Call the base class ngOnInit if needed
    super.ngOnInit();

    // Your additional ngOnInit logic here
  }

  registerUser() {
    if (this.validateUserData()) {
      this.performRegistration();
    } else {
      this.error = 'User data is invalid.';
    }
  }

  private validateUserData(): boolean {
    return this.user.email.trim() !== '' && this.user.password.trim() !== '';
  }

  private performRegistration() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('User registered:', response);
        // You can navigate to login page or perform any other action after registration
      },
      error => {
        console.error('Registration error:', error);
        this.error = 'Registration failed. Please try again.';
      }
    );
}
}
