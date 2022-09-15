import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiCountriesService {
  constructor(private http: HttpClient) {}

  async getCountries() {
    try {
      const response: any = await fetch('https://restcountries.com/v3.1/all');
      const countries: any = await response.json();
      return countries;
    } catch (error) {
      console.error(error);
    }
  }
}
