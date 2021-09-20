import { Component, Inject, OnInit, Optional } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';
import { companyCreationStatusEnum } from '../../config';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css'],
})
export class NewCompanyComponent implements OnInit {
  request: any | undefined;
  companyCreationStatusEnum = companyCreationStatusEnum;

  constructor(
    private companyService: CompanyService,
    private dialogRef: MatDialogRef<NewCompanyComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.request = this.data.request;
  }

  handleAcceptRequest() {
    this.companyService
      .approveCompanyRequest(
        this.request.companyCreationRequestId,
        this.request.companyEmail
      )
      .subscribe(
        (result) => {
          this.dialogRef.close();
        },
        (error) => {
          this.dialogRef.close();
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
        (result) => {
          this.dialogRef.close();
        },
        (error) => {
          this.dialogRef.close();
        }
      );
  }
}
