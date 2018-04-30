/*<!––Authour: Raja Naseer Ahmed Khan
    Class  : 2nd Year B.Sc Software Development
    email  :  g00351263@gmit.ie
->*/

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera'
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }
  openCame(){
    this.navCtrl.push(CameraPage);
  }

  openNews(){
    this.navCtrl.push(NewsPage);
  }
 
}
