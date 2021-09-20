import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RESET_TOKEN_KEY, TOKEN_KEY } from 'src/app/config';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../environments/environment.dev';
import { handleError } from '../services-util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  baseUrl: string = `${environment.API_REST_URL}`;

  constructor(private httpClient: HttpClient) {}

  getCompanyRequests(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + '/company-creation-request/get-all-requests')
      .pipe(catchError(handleError));
  }

  approveCompanyRequest(
    companyCreationRequestId: string,
    companyEmail: string
  ): Observable<any> {
    return this.httpClient
      .post<any>(
        this.baseUrl + '/company-creation-request/approve-request',
        { companyCreationRequestId, companyEmail },
        httpOptions
      )
      .pipe(catchError(handleError));
  }

  rejectCompanyRequest(
    companyCreationRequestId: string,
    companyEmail: string
  ): Observable<any> {
    return this.httpClient
      .post<any>(
        this.baseUrl + '/company-creation-request/reject-request',
        { companyCreationRequestId, companyEmail },
        httpOptions
      )
      .pipe(catchError(handleError));
  }

  deleteCompany(companyId: string): Observable<any> {
    return this.httpClient
      .post<any>(
        this.baseUrl + '/company/delete-company',
        { companyId },
        httpOptions
      )
      .pipe(catchError(handleError));
  }

  getAllCompanies(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + '/company/get-all-companies')
      .pipe(catchError(handleError));
  }
}
