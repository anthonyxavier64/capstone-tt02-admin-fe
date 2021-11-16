import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment.dev';
import { handleError } from '../services-util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  baseUrl: string = `${environment.API_REST_URL}`;

  constructor(private httpClient: HttpClient) {}

  getAllPayments(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + '/payment/get-all-payments')
      .pipe(catchError(handleError));
  }

  archivePaymentRecord(paymentId: string): Observable<any> {
    return this.httpClient
      .post<any>(
        this.baseUrl + '/payment/archive-payment/' + paymentId,
        httpOptions
      )
      .pipe(catchError(handleError));
  }
}
