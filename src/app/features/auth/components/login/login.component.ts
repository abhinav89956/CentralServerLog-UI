import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const payload = {
      Username: this.loginForm.value.username,
      Password: this.loginForm.value.password
    };

    this.authService.login(payload).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(['/mw-logs']);
        } else {
          this.errorMessage = res.message || 'Invalid credentials.';
          this.loading = false;
        }
      },
      error: (err) => {
        this.errorMessage = 'Server error. Could not connect to API.';
        this.loading = false;
      }
    });
  }
}
