import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getNewLocationsForBanner() {
    return this.http.get('assets/mocks/newLocationList.json', { observe: 'body' });
  }

  getBannerTextList() {
    return this.http.get('assets/mocks/bannerTextList.json', { observe: 'body' });
  }
}
