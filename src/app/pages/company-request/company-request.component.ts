import { Component, OnDestroy, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';
import { NewCompanyComponent } from '../new-company/new-company.component';
import { companyCreationStatusEnum } from '../../config';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company-request',
  templateUrl: './company-request.component.html',
  styleUrls: ['./company-request.component.css'],
})
export class CompanyRequestComponent implements OnInit, OnDestroy {
  requests: any[];
  isLoading: boolean = false;
  sortField: string;
  companyCreationStatusEnum = companyCreationStatusEnum;

  constructor(
    private dialog: MatDialog,
    private companyService: CompanyService
  ) {
    this.requests = [];
    this.sortField = '';
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.companyService.getCompanyRequests().subscribe(
      (result) => {
        const allRequests = result.types.companyCreationRequests;
        this.requests = allRequests.filter(
          (req) => req.companyCreationStatus !== companyCreationStatusEnum[2]
        );

        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.dialog) {
      this.dialog.closeAll();
      // close dialog
    }
  }

  handleClickRequest(request: any) {
    const dialogRef = this.dialog.open(NewCompanyComponent, {
      width: '100%',
      height: '100%',
      data: {
        request,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
