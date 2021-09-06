import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css'],
})
export class NewCompanyComponent implements OnInit {
  companyName: string | undefined;

  constructor(private dialogConfig: DynamicDialogConfig) {
    this.companyName = this.dialogConfig.data.companyName;
  }

  ngOnInit(): void {}
}
