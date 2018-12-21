import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieListPage} from '../movie-list/movie-list';

/**
 * Generated class for the MyMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-movies',
  templateUrl: 'my-movies.html',
})
export class MyMoviesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('c\'est bon, c\'est chargé !!');
  }
  
  findMovie() {
    this.navCtrl.push(MovieListPage);
  }

}
