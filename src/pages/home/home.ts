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
