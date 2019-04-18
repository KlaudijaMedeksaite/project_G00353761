import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CurrencyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrencyProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CurrencyProvider Provider');
  }

  getEURUSDRate(): Observable<any>{
    return this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=USD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY");
  }
  getEURCADRate(): Observable<any>{
    return this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=CAD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY");
  }
  getEURGBPRate(): Observable<any>{
    return this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=GBP&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY");
  }
  getEURAUDRate(): Observable<any>{
    return this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=AUD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY");
  }
}
