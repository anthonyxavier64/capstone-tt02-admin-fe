import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/material.module';
import { PrimeNgModule } from './core/primeng.module';
import { IndexComponent } from './pages/index/index.component';
import { JwtModule } from "@auth0/angular-jwt";
import { TOKEN_KEY } from './config';
import { HomeComponent } from './pages/home/home.component';
import { NewCompanyComponent } from './pages/new-company/new-company.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { MainComponent } from './pages/main/main.component';
import { CompanyRequestComponent } from './pages/company-request/company-request.component';

export function tokenGetter() {
  return localStorage.getItem(TOKEN_KEY);
}
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NewCompanyComponent,
    CompaniesComponent,
    PaymentsComponent,
    MainComponent,
    CompanyRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000']
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
