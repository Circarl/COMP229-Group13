import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasePageComponent implements OnInit {

  public user!: User;
  public error: String;

  constructor(route: ActivatedRoute, private router: Router, private authService: AuthService) {
    super(route);
    this.error = "";
  }

  override ngOnInit(): void {
    this.user = new User
  }
  private performLogin() {
    this.authService.login(this.user).subscribe(
      response => {
        console.log('User logged in:', response);
        // You can navigate to dashboard or perform any other action after login
      },
      error => {
        console.error('Login error:', error);
        this.error = 'Login failed. Please check your credentials.';
      }
    );
}
}
/*
  authenticate(form:NgForm): void {
    if (form.valid) {
      // Perform authentication
      this.auth.authenticate(this.user!).subscribe(data => {
        if (data.success) {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('admin/main');
        }
      });
    } else {
      this.error = 'Form Data Invalid';
    }
  }
  */

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from 'src/app/model/auth.services';
// import { User } from 'src/app/model/user.model';
// import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent extends BasePageComponent implements OnInit {

//   public user: User;
//   public error: string;

//   constructor(route: ActivatedRoute, private router: Router, private auth: AuthService) {
//     super(route);
//     this.error = "";
//     this.user = new User();
//   }

//   override ngOnInit(): void {
//   }

//   login(): void {
//     this.auth.authenticate(this.user).subscribe(
//       (response:any) => {
//         // Handle successful login response here
//         console.log('User logged in:', response);
//         // Redirect to a dashboard or other page
//         this.router.navigate(['/dashboard']);
//       },
//       (error:any )=> {
//         // Handle login error here
//         console.log('Login error:', error);
//         this.error = 'Invalid email or password'; // Set an error message for display
//       }
//     );
//   }
// }
