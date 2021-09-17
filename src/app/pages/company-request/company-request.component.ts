import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyService } from 'src/app/services/company/company.service';
import { NewCompanyComponent } from '../new-company/new-company.component';
import { companyCreationStatusEnum } from '../../config';

@Component({
  selector: 'app-company-request',
  templateUrl: './company-request.component.html',
  styleUrls: ['./company-request.component.css'],
  providers: [DialogService],
})
export class CompanyRequestComponent implements OnInit, OnDestroy {
  requests: any[];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  sortField: string;
  companyCreationStatusEnum = companyCreationStatusEnum;

  constructor(
    private dialogService: DialogService,
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
    if (this.ref) {
      this.ref.close();
    }
  }

  handleClickRequest(request: any) {
    this.ref = this.dialogService.open(NewCompanyComponent, {
      data: {
        request,
      },
      width: '70%',
      height: '100%',
    });
  }
}
