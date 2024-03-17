import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from '../models';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ContactFormsService {
  private readonly endPoint: string = 'contact-forms';

  constructor(private http: HttpClient) {}

  async list(): Promise<ContactForm[] | null> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/list`;
      this.http
        .get(url, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (response: any) => {
            const data: any = response.data.map((item: any) =>
              ContactForm.fromObject(item.data, new ContactForm())
            );
            return resolve(data);
          },
          error: (e: any) => {
            console.log('Error in: ContactFormsService.list() -> ', e);
            return resolve(null);
          },
          complete: () => {
            // console.log('completed');
          },
        });
    });
  }

  async get(id: number): Promise<ContactForm | null> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/get/${id}`;
      this.http
        .get(url, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (response: any) => {
            const data = ContactForm.fromObject(
              response.data,
              new ContactForm()
            );
            return resolve(data);
          },
          error: (e: any) => {
            console.log('Error in: ContactFormsService.get() -> ', e);
            return resolve(null);
          },
          complete: () => {
            // console.log('completed');
          },
        });
    });
  }

  async create(contactForm: ContactForm): Promise<ContactForm | null> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/create`;
      this.http
        .post(url, contactForm, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (response: any) => {
            const data = ContactForm.fromObject(
              response.data,
              new ContactForm()
            );
            return resolve(data);
          },
          error: (e: any) => {
            console.log('Error in: ContactFormsService.create() -> ', e);
            return resolve(null);
          },
          complete: () => {
            console.log('completed');
          },
        });
    });
  }
  async delete(id: number): Promise<any> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/delete/${id}`;
      this.http
        .delete(url, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: () => {
            resolve(null);
          },
          error: (e: any) => {
            console.error('Error in: ContactFormsService.delete() -> ', e);
            return resolve(null);
          },
          complete: () => {
            // console.log(`completed`);
          },
        });
    });
  }
}
