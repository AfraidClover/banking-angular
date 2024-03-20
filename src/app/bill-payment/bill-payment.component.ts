import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-bill-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill-payment.component.html',
  styleUrl: './bill-payment.component.css' // Corrected to 'styleUrls' and made it an array
})
export class BillPaymentComponent implements OnInit {
  providers: any[] = []; // Define the type according to your data
  availableBoolean: boolean[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadProvidersData();
  }

  loadProvidersData() {
    this.providers = [...this.dataService.getProvidersData()];
    this.availableBoolean = Array(this.providers.length).fill(true);
  }

  get filteredProviders() {
    return this.providers.filter((item, index) => this.availableBoolean[index]);
  }

  get filteredProviders2() {
    return this.providers.filter((item, index) => !this.availableBoolean[index]);
  }

  updateProvider(e: Event) {
    const target = e.target as HTMLInputElement; // Type assertion
    const id = parseInt(target.id, 10) - 1; // Ensure 'id' is treated as a number
    this.availableBoolean[id] = !this.availableBoolean[id];
  }
}
