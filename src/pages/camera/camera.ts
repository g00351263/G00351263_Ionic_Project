
/*<!––Authour: Raja Naseer Ahmed Khan
    Class  : 2nd Year B.Sc Software Development
    email  :  g00351263@gmit.ie
->*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


//Camera Functions and Options are Taken
//From Ionicframwork.org website

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
 
  public photos: any;
  public base64Image: string;
 
  constructor(private camera: Camera, //Dependencies InJections
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.photos = [];
  }
  ionViewDidLoad() { //onLoad can Trigger console
    console.log('ionViewDidLoad CameraPage');
  }
  openCamera(){
  // all functions available from ionic website
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse(); // this functions pushes photo
      //in reverse so can be seen first
      
    }, (err) => {
     // Handle error
    });
  }
  delPhoto(index){ // in case photo delete it
    // removes it from array
    this.photos.splice(index,1);
  }
  takePhoto(){
   alert("Starting Camera"); 
  }
  

}
