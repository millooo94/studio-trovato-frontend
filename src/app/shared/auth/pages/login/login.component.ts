import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService);

  router = inject(Router);

  user: User = {
    email: 'email@prova.com',
    password: 'Prova94',
  } as User;

  fb = inject(FormBuilder);
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      this.authService
        .signin({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        } as User)
        .subscribe((response) => {
          if (response) this.router.navigate(['/dashboard']);
        });
    }
  }
}
