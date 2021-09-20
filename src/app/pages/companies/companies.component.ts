import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyService } from 'src/app/services/company/company.service';
import { ViewCompanyDialogComponent } from '../view-company-dialog/view-company-dialog.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [DialogService],
})
export class CompaniesComponent implements OnInit {
  allCompanies: any;
  isCompanyDetailsOpen: boolean;
  selectedCompany: any;
  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe(
      (response) => {
        this.allCompanies = response.companies;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openCompanyDetails(company: any) {
    // this.selectedCompany = company;
    // this.isCompanyDetailsOpen = true;
    this.ref = this.dialogService.open(ViewCompanyDialogComponent, {
      data: {
        company,
      },
      width: '70%',
      height: '80%',
    });
  }
}
