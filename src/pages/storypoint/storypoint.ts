import { PokerCard } from '../../model/pokercard';
import { PokerCardService } from '../../service/pokercard';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-storypoint',
  templateUrl: 'storypoint.html'
})
export class StoryPointPage {
  pokercard: PokerCard;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pokercard = this.navParams.get('selectedCard');
  }

  onValueClick() {
    this.navCtrl.pop();
  }
}
