import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-view-company-dialog',
  templateUrl: './view-company-dialog.component.html',
  styleUrls: ['./view-company-dialog.component.css'],
})
export class ViewCompanyDialogComponent implements OnInit {
  company: any | undefined;

  constructor(
    private dialogConfig: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private companyService: CompanyService
  ) {
    this.company = this.dialogConfig.data.company;
  }

  ngOnInit(): void {}

  onDelete() {
    // BE DELETE LOGIC GOES IN HERE
    this.companyService.deleteCompany(this.company.companyId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.ref.close();
  }

  onClose() {
    this.ref.close();
  }
}
