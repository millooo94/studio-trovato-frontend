import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = getAccessToken();
  const authService = inject(AuthService);
  const router = inject(Router);
  if (jwtToken) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return next(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          authService.isAuthenticatedSubject.next(false);
          localStorage.removeItem('ACCESS_TOKEN');
          router.navigate(['/login']);
        }
        return throwError(() => console.log(error.status));
      })
    );
  }
  return next(req);
};

const getAccessToken = (): string | null => {
  return localStorage.getItem('ACCESS_TOKEN');
};
