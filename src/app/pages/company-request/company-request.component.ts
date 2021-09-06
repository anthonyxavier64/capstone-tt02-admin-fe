import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewCompanyComponent } from '../new-company/new-company.component';

@Component({
  selector: 'app-company-request',
  templateUrl: './company-request.component.html',
  styleUrls: ['./company-request.component.css'],
  providers: [DialogService],
})
export class CompanyRequestComponent implements OnInit, OnDestroy {
  requests: any[];
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {
    this.requests = [
      {
        companyName: 'company A',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
      {
        companyName: 'company B',
      },
    ];
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  handleClickRequest(request: any) {
    this.ref = this.dialogService.open(NewCompanyComponent, {
      data: {
        companyName: request.companyName,
      },
      width: '70%',
      height: '100%',
    });
  }
}
