import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	apiURL: string = '../../assets/data/dogs.json';

  constructor(private httpClient: HttpClient) {}
  public getCarsList(){
    return this.httpClient.get(`${this.apiURL}`);
  }
}
