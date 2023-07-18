import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpclient:HttpClient) { }

apiUrl='https://localhost:7022/api/brands/getall';
  getBrands():Observable<BrandResponseModel>{
return this.httpclient.get<BrandResponseModel>(this.apiUrl);
  }
}
