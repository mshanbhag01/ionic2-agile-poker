import { StoryPointPage } from '../storypoint/storypoint';
import { PokerCardService } from '../../service/pokercard';
import { PokerCard } from '../../model/pokercard';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tshirt',
  templateUrl: 'tshirt.html'
})
export class TshirtPage {
  pokercards: PokerCard[];
  constructor(public navCtrl: NavController, private pokerCardService: PokerCardService) {

  }

  ngOnInit() {
    this.pokercards = this.pokerCardService.getTShirtPokerCards();
  }
  
  onCardSelected(pokercard: PokerCard) {
    this.navCtrl.push(StoryPointPage, { selectedCard: pokercard });
  }
}
