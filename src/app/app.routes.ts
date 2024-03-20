import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { BillPaymentComponent } from "./bill-payment/bill-payment.component";
import { RequestCheckComponent } from "./request-check/request-check.component";
import { RequestCardComponent } from "./request-card/request-card.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transfer', component: FundTransferComponent },
  { path: 'payments', component: BillPaymentComponent },
  { path: 'req-check', component: RequestCheckComponent },
  { path: 'req-card', component: RequestCardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // default route
];