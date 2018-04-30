/*<!––Authour: Raja Naseer Ahmed Khan
    Class  : 2nd Year B.Sc Software Development
    email  :  g00351263@gmit.ie
->*/

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
