import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [MessageService],
})
export class TransactionComponent implements OnInit {
  paidCompanies: any[];
  unpaidCompanies: any[];
  months: string[];
  selectedPaidMonth: string;
  selectedUnpaidMonth: string;
  searchPaidCompanyName: string = '';
  searchUnpaidCompanyName: string = '';
  searchPaidYear: string = '';
  searchUnpaidYear: string = '';
  storePaidCompanies: any[];
  storeUnpaidCompanies: any[];
  archivedPaidCompanies: any[] = [];
  archiveUnpaidCompanies: any[] = [];
  viewUnpaidArchived: boolean = false;
  viewPaidArchived: boolean = false;

  constructor(
    private paymentService: PaymentService,
    private messageService: MessageService
  ) {
    paymentService.getAllPayments().subscribe(
      (response) => {
        const payments = response.payments;

        this.paidCompanies = payments.filter(
          (payment) =>
            payment.paymentStatus === 'ACCEPTED' && payment.isArchived === false
        );

        this.archivedPaidCompanies = payments.filter(
          (payment) =>
            payment.paymentStatus === 'ACCEPTED' && payment.isArchived === true
        );

        this.storePaidCompanies = [...this.paidCompanies];

        this.unpaidCompanies = payments.filter(
          (payment) =>
            payment.paymentStatus === 'REJECTED' && payment.isArchived === false
        );

        this.archiveUnpaidCompanies = payments.filter(
          (payment) =>
            payment.paymentStatus === 'REJECTED' && payment.isArchived === true
        );

        this.storeUnpaidCompanies = [...this.unpaidCompanies];
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Unable to retrieve transactions.',
        });
      }
    );

    this.months = [
      'None',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  ngOnInit(): void {}

  handlePaidSearch(event: any) {
    this.paidCompanies = new Array();

    this.searchPaidYear = '';
    this.selectedPaidMonth = null;

    this.storePaidCompanies.forEach((payment) => {
      if (
        payment.company.name
          .toLowerCase()
          .startsWith(this.searchPaidCompanyName)
      ) {
        this.paidCompanies.push(payment);
      }
    });
  }

  handlePaidYearFilter(event: any) {
    this.paidCompanies = new Array();

    this.searchPaidCompanyName = '';
    this.selectedPaidMonth = null;

    this.storePaidCompanies.forEach((payment) => {
      if (
        new Date(payment.date)
          .getFullYear()
          .toString()
          .startsWith(this.searchPaidYear)
      ) {
        this.paidCompanies.push(payment);
      }
    });
  }

  handlePaidMonthFilter(event: any) {
    this.searchPaidCompanyName = '';
    this.searchPaidYear = '';

    if (this.selectedPaidMonth !== 'None') {
      this.paidCompanies = new Array();

      this.storePaidCompanies.forEach((payment) => {
        if (
          this.months[new Date(payment.date).getMonth() + 1].toString() ===
          this.selectedPaidMonth
        ) {
          this.paidCompanies.push(payment);
        }
      });
    } else {
      this.paidCompanies = this.storePaidCompanies;
    }
  }

  handleUnpaidSearch(event: any) {
    this.searchUnpaidYear = '';
    this.selectedUnpaidMonth = null;

    this.unpaidCompanies = new Array();

    this.storeUnpaidCompanies.forEach((payment) => {
      if (
        payment.company.name
          .toLowerCase()
          .startsWith(this.searchUnpaidCompanyName)
      ) {
        this.unpaidCompanies.push(payment);
      }
    });
  }

  handleUnpaidYearFilter(event: any) {
    this.unpaidCompanies = new Array();

    this.selectedUnpaidMonth = null;
    this.searchUnpaidCompanyName = '';

    this.storeUnpaidCompanies.forEach((payment) => {
      if (
        new Date(payment.date)
          .getFullYear()
          .toString()
          .startsWith(this.searchUnpaidYear)
      ) {
        this.unpaidCompanies.push(payment);
      }
    });
  }

  handleUnpaidMonthFilter(event: any) {
    this.searchUnpaidCompanyName = '';
    this.searchUnpaidYear = '';

    if (this.selectedUnpaidMonth !== 'None') {
      this.unpaidCompanies = new Array();

      this.storeUnpaidCompanies.forEach((payment) => {
        if (
          this.months[new Date(payment.date).getMonth() + 1].toString() ===
          this.selectedUnpaidMonth
        ) {
          this.unpaidCompanies.push(payment);
        }
      });
    } else {
      this.unpaidCompanies = this.storeUnpaidCompanies;
    }
  }

  archivePaymentRecord(paymentId: string) {
    let index = this.storePaidCompanies.findIndex(
      (payment) => payment.paymentId === paymentId
    );

    console.log(index);

    if (index >= 0) {
      this.archivedPaidCompanies.push(this.storePaidCompanies[index]);

      this.storePaidCompanies = this.storePaidCompanies.filter(
        (payment) => payment.paymentId !== paymentId
      );

      this.archivedPaidCompanies = this.archivedPaidCompanies.map((item) => {
        item.isArchived = true;
        return item;
      });

      this.paidCompanies = this.storePaidCompanies;

      console.log(this.paidCompanies);

      console.log(this.archivedPaidCompanies);
    } else {
      index = this.storeUnpaidCompanies.findIndex(
        (payment) => payment.paymentId === paymentId
      );

      this.archiveUnpaidCompanies.push(this.storeUnpaidCompanies[index]);

      this.storeUnpaidCompanies = this.storeUnpaidCompanies.filter(
        (payment) => payment.paymentId !== paymentId
      );

      this.archiveUnpaidCompanies = this.archiveUnpaidCompanies.map((item) => {
        item.isArchived = true;
        return item;
      });

      this.unpaidCompanies = this.storeUnpaidCompanies;
    }

    this.paymentService.archivePaymentRecord(paymentId).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Transaction archived.',
        });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Unable to archive transaction.',
        });
      }
    );
  }

  viewUnpaidArchives() {
    this.viewUnpaidArchived = !this.viewUnpaidArchived;

    if (this.viewUnpaidArchived) {
      this.unpaidCompanies = this.archiveUnpaidCompanies;
    } else {
      this.unpaidCompanies = this.storeUnpaidCompanies;
    }
  }

  viewPaidArchives() {
    console.log('here');

    this.viewPaidArchived = !this.viewPaidArchived;

    if (this.viewPaidArchived) {
      this.paidCompanies = this.archivedPaidCompanies;
    } else {
      this.paidCompanies = this.storePaidCompanies;
    }
  }
}
