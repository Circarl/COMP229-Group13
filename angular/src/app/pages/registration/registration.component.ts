import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends BasePageComponent implements OnInit {

  public error: string;
  public user: User;

  constructor(route: ActivatedRoute, router: Router) {
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
    console.log('User registered:', this.user);
    // You can make API calls, save to the database, etc. here
  }
}
