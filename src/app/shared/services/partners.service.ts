import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ContactForm, Partner } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  private readonly endPoint: string = 'partners';

  constructor(private http: HttpClient) {}

  async list(): Promise<Partner[] | null> {
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
            const data = response.data.map((item: any) =>
              Partner.fromObject(item, new Partner())
            );
            return resolve(data);
          },
          error: (e: any) => {
            console.log('Error in: PartnersService.list() -> ', e);
            return resolve(null);
          },
          complete: () => {
            // console.log('completed')
          },
        });
    });
  }

  async get(id: number): Promise<Partner | null> {
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
            const data = Partner.fromObject(response.data, new Partner());
            return resolve(data);
          },

          error: (e: any) => {
            console.log('Error in: PartnersService.get() -> ', e);
            return resolve(null);
          },
          complete: () => {
            console.log('completed');
          },
        });
    });
  }

  async create(partner: Partner): Promise<Partner | null> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/create`;
      this.http
        .post(url, partner, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (response: any) => {
            const data = Partner.fromObject(response.data, new Partner());
            return resolve(data);
          },
          error: (e: any) => {
            console.log('Error in: PartnersService.create() -> ', e);
            return resolve(null);
          },
          complete: () => {
            console.log('completed');
          },
        });
    });
  }

  async update(id: number, partner: Partner | null): Promise<Partner | null> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/update/${id}`;
      this.http
        .patch(url, partner, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (response: any) => {
            const data = Partner.fromObject(response.data, new Partner());
            return resolve(data);
          },
          error: (e: any) => {
            console.log('Error in: PartnersService.update() -> ', e);
            return resolve(null);
          },
          complete: () => {
            // console.log('completed')
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
            console.error('Error in: PartnersService.delete() -> ', e);
            return resolve(null);
          },
          complete: () => {
            // console.log('completed')
          },
        });
    });
  }
}
