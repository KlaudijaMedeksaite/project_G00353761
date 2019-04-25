import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {CurrencyProvider} from '../../providers/currency/currency';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  rates: any;
  constructor(public navCtrl: NavController, private storage:Storage, private exR:CurrencyProvider) {
    
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
        this.rates = this.exR.getEURGBPRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to GBP: " + this.rates);
      }
      else if(this.currency2 === "USD")
      {
        this.rates = this.exR.getEURUSDRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to USD: " + this.rates);
      }
      else if(this.currency2 === "CAD")
      {
        this.rates = this.exR.getEURCADRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to CAD: " + this.rates);
      }
      else if(this.currency2 === "AUD")
      {
        this.rates = this.exR.getEURAUDRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
    }
    else if(this.currency1 === "sterling")
    {
      if(this.currency2 === "euro")
      {
        this.rates = this.exR.getGBPEURRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "USD")
      {
        this.rates = this.exR.getGBPUSDRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "CAD")
      {
        this.rates = this.exR.getGBPCADRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "AUD")
      {
        this.rates = this.exR.getGBPAUDRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
    }
    else if(this.currency1 === "USD")
    {
      if(this.currency2 === "euro")
      {
        this.rates = this.exR.getUSDEURRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "sterling")
      {
        this.rates = this.exR.getUSDGBPRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "CAD")
      {
        this.rates = this.exR.getUSDCADRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "AUD")
      {
        this.rates = this.exR.getUSDAUDRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
    }
    else if(this.currency1 === "CAD")
    {
      if(this.currency2 === "euro")
      {
        this.rates = this.exR.getCADEURRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "USD")
      {
        this.rates = this.exR.getCADUSDRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "sterling")
      {
        this.rates = this.exR.getCADGBPRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "AUD")
      {
        this.rates = this.exR.getCADAUDRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
    }
    else if(this.currency1 === "AUD")
    {
      if(this.currency2 === "euro")
      {
        this.rates = this.exR.getAUDEURRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "USD")
      {
        this.rates = this.exR.getAUDUSDRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "CAD")
      {
        this.rates = this.exR.getAUDCADRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
      else if(this.currency2 === "sterling")
      {
        this.rates = this.exR.getAUDGBPRate();
        this.converted = ((this.money * this.rates)/100);
        console.log("rate euro to AUD: " + this.rates);
      }
    }
  }
}
