import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NewsProvider } from '../../providers/news/news';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news: any[]=[];

  constructor(private nw: NewsProvider, 
    public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    this.nw.getMovies().subscribe(data =>
      {
      this.news = data.articles;
      });
  }

}
