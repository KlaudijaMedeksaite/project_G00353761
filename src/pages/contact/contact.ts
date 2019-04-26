import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, private storage : Storage) {
   
  }
  result = '';

  onClick(butN)
  {
    if(butN == 'C'){
      this.result = '';
    }
    else if(butN == '='){
      this.result = eval(this.result);
    }
    else{
      this.result+=butN;
    }
  }

  
}