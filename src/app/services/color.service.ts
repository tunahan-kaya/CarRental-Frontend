import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
apiUrl='https://localhost:7022/api/colors/getall'
  constructor(private httpcilent:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
return this.httpcilent.get<ColorResponseModel>(this.apiUrl);
  }
}
