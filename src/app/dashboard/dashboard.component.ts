import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css' 
})
export class DashboardComponent implements OnInit {
  accountData: any; // Define the type based on your account data structure

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadAccountData();
  }

  loadAccountData() {
    // Here you would assign the fetched data to your component's property
    this.accountData = this.dataService.getAccountData();
  }
}
