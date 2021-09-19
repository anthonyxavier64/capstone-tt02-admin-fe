import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-company-dialog',
  templateUrl: './view-company-dialog.component.html',
  styleUrls: ['./view-company-dialog.component.css'],
})
export class ViewCompanyDialogComponent implements OnInit {
  company: any | undefined;

  constructor(
    private dialogConfig: DynamicDialogConfig,
    private ref: DynamicDialogRef
  ) {
    this.company = this.dialogConfig.data.company;
  }

  ngOnInit(): void {}

  onDelete() {
    // BE DELETE LOGIC GOES IN HERE
    this.ref.close();
  }

  onClose() {
    this.ref.close();
  }
}
