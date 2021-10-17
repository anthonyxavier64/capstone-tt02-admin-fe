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
  allNotDeletedCompanies: any[];
  allDeletedCompanies: any[];
  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe(
      (response) => {
        this.allNotDeletedCompanies = response.companies.filter(
          (company) => !company.isDeleted
        );

        this.allDeletedCompanies = response.companies.filter(
          (company) => company.isDeleted
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openCompanyDetails(company: any) {
    this.ref = this.dialogService.open(ViewCompanyDialogComponent, {
      data: {
        company,
      },
      width: '70%',
      height: '80%',
    });

    this.ref.onClose.subscribe((response) => {
      if (response) {
        this.allNotDeletedCompanies = response.notDeletedCompanies;
        this.allDeletedCompanies = response.deletedCompanies;
      }
    });
  }
}
