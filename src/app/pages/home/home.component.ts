import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentTab: string;

  constructor() {
    this.currentTab = '';
  }

  ngOnInit(): void {}

  handleNewCompany() {
    this.currentTab = 'requestTab';
  }

  handleCompanies() {
    this.currentTab = 'companiesTab';
  }

  handlePayments() {
    this.currentTab = 'paymentsTab';
  }

  handleMain() {
    this.currentTab = 'mainTab';
  }
}
