import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewCompanyDialogComponent } from '../view-company-dialog/view-company-dialog.component';

interface company {
  companyId: number;
  name: string;
  email: string;
  contactNumber: string;
  officeOpeningHour: string;
  officeClosingHour: string;
  officeCapacity: number;
  companySize: string;
  subscriptionType: string;
  wfoArrangement: string;
  numOfEmployees: number;
  officeName: string;
  createdAt: string;
}

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [DialogService],
})
export class CompaniesComponent implements OnInit {
  allCompanies: any;
  isCompanyDetailsOpen: boolean;
  selectedCompany: company;
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {
    this.allCompanies = [
      {
        companyId: 12345,
        name: 'string',
        email: 'string@string',
        contactNumber: '1234',
        officeOpeningHour: '0800',
        officeClosingHour: '1700',
        officeCapacity: 50,
        companySize: 'Small',
        subscriptionType: 'Pro',
        wfoArrangement: 'wfo',
        numOfEmployees: 100,
        officeName: 'abcded',
        createdAt: '122021',
      },
      {
        companyId: 12346,
        name: 'stringfveve',
        email: 'stvervring@string',
        contactNumber: '1234',
        officeOpeningHour: '0800',
        officeClosingHour: '1700',
        officeCapacity: 50,
        companySize: 'Medium',
        subscriptionType: 'Pro',
        wfoArrangement: 'wfo',
        numOfEmployees: 100,
        officeName: 'fwevwe',
        createdAt: '132012',
      },
      {
        companyId: 123456,
        name: 'string',
        email: 'vfdverstring@string',
        contactNumber: '1234567',
        officeOpeningHour: '0800',
        officeClosingHour: '1700',
        officeCapacity: 50,
        companySize: 'Large',
        subscriptionType: 'Pro',
        wfoArrangement: 'wfo',
        numOfEmployees: 1200,
        officeName: 'abcded',
        createdAt: '213812',
      },
    ];
  }

  ngOnInit(): void {}

  openCompanyDetails(company: company) {
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
