import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TOKEN_KEY } from './config';
import { MaterialModule } from './core/material.module';
import { PrimeNgModule } from './core/primeng.module';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CompanyRequestComponent } from './pages/company-request/company-request.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { MainComponent } from './pages/main/main.component';
import { NewCompanyComponent } from './pages/new-company/new-company.component';
import { ViewCompanyDialogComponent } from './pages/view-company-dialog/view-company-dialog.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { TransactionDialogComponent } from './pages/transaction-dialog/transaction-dialog.component';

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
    MainComponent,
    CompanyRequestComponent,
    ViewCompanyDialogComponent,
    TransactionComponent,
    TransactionDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    PrimeNgModule,
    MaterialModule,
    FlexLayoutModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000'],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
