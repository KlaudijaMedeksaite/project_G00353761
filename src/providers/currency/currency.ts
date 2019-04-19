import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyProvider {
  rates: any;

  constructor(public http: HttpClient) {
    console.log('Hello CurrencyProvider Provider');
  }

  getEURUSDRate(){
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=USD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rates = data.value;
    });
    return this.rates;
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
