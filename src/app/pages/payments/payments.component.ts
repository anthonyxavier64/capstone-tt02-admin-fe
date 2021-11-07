import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  paidCompanies: any[];
  unpaidCompanies: any[];
  months: string[];
  selectedMonth: string;

  constructor() {
    this.paidCompanies = [
      {
        name: 'Company 1',
        datePaid: new Date(2021, 10, 1).toLocaleDateString(),
        subscriptionType: 'BASIC',
        amountPaid: 200,
        paymentStatus: 'Success',
      },
      {
        name: 'Company 2',
        datePaid: new Date(2021, 10, 2).toLocaleDateString(),
        subscriptionType: 'BASIC',
        amountPaid: 200,
        paymentStatus: 'Success',
      },
      {
        name: 'Company 3',
        datePaid: new Date(2021, 10, 3).toLocaleDateString(),
        subscriptionType: 'STANDARD',
        amountPaid: 300,
        paymentStatus: 'Success',
      },
      {
        name: 'Company 4',
        datePaid: new Date(2021, 10, 4).toLocaleDateString(),
        subscriptionType: 'PRO',
        amountPaid: 500,
        paymentStatus: 'Success',
      },
    ];
    this.unpaidCompanies = [{}];
    this.months = ['January', 'February', 'March', 'November'];
    this.selectedMonth = 'November';
  }

  ngOnInit(): void {}
}
