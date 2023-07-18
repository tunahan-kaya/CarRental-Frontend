import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:7022/api/cars/getcardetails';
  constructor(private htttpclient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
   return this.htttpclient.get<CarResponseModel>(this.apiUrl)
    }

}
