import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyProvider {
  rate: any;

  constructor(public http: HttpClient) {
    console.log('Hello CurrencyProvider Provider');
  }

  //EURO EXCHANGE
  getEURUSDRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=USD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rate = data.value;
    });
    return this.rate;
  }
  getEURCADRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=CAD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rate = data.value;
    });
    return this.rate;
  }
  getEURGBPRate(): Observable<any>{
     this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=GBP&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rate = data.value;
    });
    return this.rate;
  }
  getEURAUDRate(): Observable<any>{
     this.http.get("https://forex.1forge.com/1.0.3/convert?from=EUR&to=AUD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rate = data.value;
    });
    return this.rate;
  }

  //GBP EXCHANGE
  getGBPEURRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=GBP&to=EUR&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
     this.rate = data.value;
   });
   return this.rate;
  }
  getGBPUSDRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=GBP&to=USD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
    this.rate = data.value;
  });
  return this.rate;
  }
  getGBPAUDRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=GBP&to=AUD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
     this.rate = data.value;
   });
   return this.rate;
  }
  getGBPCADRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=GBP&to=CAD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
    this.rate = data.value;
  });
  return this.rate;
  }
  //USD EXCHANGE
  getUSDEURRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=USD&to=EUR&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
     this.rate = data.value;
   });
   return this.rate;
  }
  getUSDGBPRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=USD&to=GBP&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
    this.rate = data.value;
  });
  return this.rate;
  }
  getUSDAUDRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=USD&to=AUD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
     this.rate = data.value;
   });
   return this.rate;
  }
  getUSDCADRate(): Observable<any>{
    this.http.get("https://forex.1forge.com/1.0.3/convert?from=USD&to=CAD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
    this.rate = data.value;
  });
  return this.rate;
  }
    //AUD EXCHANGE
    getAUDEURRate(): Observable<any>{
      this.http.get("https://forex.1forge.com/1.0.3/convert?from=AUD&to=EUR&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
       this.rate = data.value;
     });
     return this.rate;
    }
    getAUDGBPRate(): Observable<any>{
      this.http.get("https://forex.1forge.com/1.0.3/convert?from=AUD&to=GBP&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rate = data.value;
    });
    return this.rate;
    }
    getAUDUSDRate(): Observable<any>{
      this.http.get("https://forex.1forge.com/1.0.3/convert?from=AUD&to=USD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
       this.rate = data.value;
     });
     return this.rate;
    }
    getAUDCADRate(): Observable<any>{
      this.http.get("https://forex.1forge.com/1.0.3/convert?from=AUD&to=CAD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rate = data.value;
    });
    return this.rate;
    }
    //CAD EXCHANGE
    getCADEURRate(): Observable<any>{
      this.http.get("https://forex.1forge.com/1.0.3/convert?from=CAD&to=EUR&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
       this.rate = data.value;
     });
     return this.rate;
    }
    getCADGBPRate(): Observable<any>{
      this.http.get("https://forex.1forge.com/1.0.3/convert?from=CAD&to=GBP&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rate = data.value;
    });
    return this.rate;
    }
    getCADUSDRate(): Observable<any>{
      this.http.get("https://forex.1forge.com/1.0.3/convert?from=CAD&to=USD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
       this.rate = data.value;
     });
     return this.rate;
    }
    getCADAUDRate(): Observable<any>{
      this.http.get("https://forex.1forge.com/1.0.3/convert?from=CAD&to=AUD&quantity=100&api_key=lF9lfB77etzSij2vvWnasSEzNK6SXyAY").subscribe(data=>{
      this.rate = data.value;
    });
    return this.rate;
    }
}
