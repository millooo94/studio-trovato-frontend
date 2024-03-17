import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  tap,
  throwError,
} from 'rxjs';
import { User } from '../models';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly endPoint: string = 'auth';
  private readonly ACCESS_TOKEN = 'ACCESS_TOKEN';
  private http = inject(HttpClient);
  public isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  signin(user: User): Observable<any> {
    const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/local/signin`;
    return this.http
      .post(url, user)
      .pipe(tap((tokens) => this.storeJwtToken(tokens)));
  }

  storeJwtToken(jwt: any): void {
    localStorage.setItem(this.ACCESS_TOKEN, jwt['access_token']);
    this.isAuthenticatedSubject.next(true);
  }

  getLoggedUser(): Promise<any | null> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/currentuser`;
      this.http.get(url).subscribe({
        next: (response: any) => {
          const loggedUser = { email: response.email };
          console.log(loggedUser);
          return resolve(loggedUser);
        },
      });
    });
  }

  logout(): Observable<any> {
    const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/logout`;
    return this.http.post(url, null).pipe(
      tap(() => {
        localStorage.removeItem(this.ACCESS_TOKEN);
        this.isAuthenticatedSubject.next(false);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.ACCESS_TOKEN);
  }
}
