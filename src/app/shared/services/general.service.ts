import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { General } from '../models';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private readonly endPoint: string = 'general';

  constructor(private http: HttpClient) {}

  async get(): Promise<General | null> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/get`;
      this.http
        .get(url, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (response: any) => {
            const data: any = General.fromObject(response.data, new General());
            return resolve(data);
          },
          error: (e: any) => {
            console.log('Error in: GeneralService.get() -> ', e);
            return resolve(null);
          },
          complete: () => {
            // console.log('completed');
          },
        });
    });
  }

  async update(data: General): Promise<General | null> {
    return new Promise((resolve) => {
      const url: string = `${environment.mainApiBaseUrl}/api/${this.endPoint}/update`;
      this.http
        .patch(url, data, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (response: any) => {
            const data: any = General.fromObject(response.data, new General());
            return resolve(data);
          },
          error: (e: any) => {
            console.log('Error in: GeneralService.update() -> ', e);
            return resolve(null);
          },
          complete: () => {
            // console.log('completed');
          },
        });
    });
  }
}
