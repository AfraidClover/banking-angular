import { Injectable } from '@angular/core';
import { account } from '../assets/data';
import { providers } from "../assets/data";

@Injectable({
  providedIn: 'root'
})
  
export class DataService {

  getAccountData() {
    return account;
  }
  
  getProvidersData() {
    return providers;
  }
}
