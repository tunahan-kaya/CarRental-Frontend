import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpclient:HttpClient) { }
  apiUrl='https://localhost:7022/api/rentals/getrentaldetails';
  getRents():Observable<RentalResponseModel>{
    return this.httpclient.get<RentalResponseModel>(this.apiUrl);
  }
}
