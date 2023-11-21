import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countries: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe(data => {
        this.countries = data;
      });
  }

  shortenCountryName(name: string): string {
    const maxLength = 9;
    return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
  }
}
