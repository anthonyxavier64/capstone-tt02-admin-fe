import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CompanyService } from 'src/app/services/company/company.service';
import { companyCreationStatusEnum } from '../../config';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css'],
})
export class NewCompanyComponent implements OnInit {
  request: any | undefined;
  companyCreationStatusEnum = companyCreationStatusEnum;

  constructor(
    private dialogConfig: DynamicDialogConfig,
    private companyService: CompanyService
  ) {
    this.request = this.dialogConfig.data.request;
  }

  ngOnInit(): void {}

  handleAcceptRequest() {
    this.companyService
      .approveCompanyRequest(
        this.request.companyCreationRequestId,
        this.request.companyEmail
      )
      .subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleRejectRequest() {
    this.companyService
      .rejectCompanyRequest(
        this.request.companyCreationRequestId,
        this.request.companyEmail
      )
      .subscribe(
        (result) => {},
        (error) => {}
      );
  }
}
