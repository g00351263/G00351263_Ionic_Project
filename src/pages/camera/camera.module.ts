/*<!––Authour: Raja Naseer Ahmed Khan
    Class  : 2nd Year B.Sc Software Development
    email  :  g00351263@gmit.ie
->*/

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
})
export class CameraPageModule {}
