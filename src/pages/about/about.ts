import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  constructor(public navCtrl: NavController, private storage:Storage, private httpclient:HttpClient) {

  }

converted : number = 0.00;
cur1 : any;
cur2 : any;
start : any;

money:number;
currency1:string;
currency2:string;


  private onClick()
  {

    //have to use storage think of something

    if(this.currency1===this.currency2)
    {
      this.converted = this.money;
    }
    else if(this.currency1 === "euro")
    {
      if(this.currency2 === "sterling")
      {
        
          
          
      }
      else if(this.currency2 === "USD")
      {

      }
      else if(this.currency2 === "CAD")
      {

      }
      else if(this.currency2 === "AUD")
      {

      }
    }
    else if(this.currency1 === "sterling")
    {
      if(this.currency2 === "euro")
      {

      }
      else if(this.currency2 === "USD")
      {

      }
      else if(this.currency2 === "CAD")
      {

      }
      else if(this.currency2 === "AUD")
      {
        
      }
    }
    else if(this.currency1 === "USD")
    {
      if(this.currency2 === "euro")
      {

      }
      else if(this.currency2 === "sterling")
      {

      }
      else if(this.currency2 === "CAD")
      {

      }
      else if(this.currency2 === "AUD")
      {
        
      }
    }
    else if(this.currency1 === "CAD")
    {
      if(this.currency2 === "euro")
      {

      }
      else if(this.currency2 === "USD")
      {

      }
      else if(this.currency2 === "sterling")
      {

      }
      else if(this.currency2 === "AUD")
      {
        
      }
    }
    else if(this.currency1 === "AUD")
    {
      if(this.currency2 === "euro")
      {

      }
      else if(this.currency2 === "USD")
      {

      }
      else if(this.currency2 === "CAD")
      {

      }
      else if(this.currency2 === "sterling")
      {
        
      }
    }

  }
}
