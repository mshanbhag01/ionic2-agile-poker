import { StoryPointPage } from '../storypoint/storypoint';
import { PokerCard } from '../../model/pokercard';
import { PokerCardService } from '../../service/pokercard';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-fibonacci',
  templateUrl: 'fibonacci.html'
})
export class FibonacciPage {

  pokercards: PokerCard[];
  constructor(public navCtrl: NavController, private pokerCardService: PokerCardService) {

  }

  ngOnInit() {
    this.pokercards = this.pokerCardService.getFibonacciPokerCards();
  }

  onCardSelected(pokercard: PokerCard) {
    this.navCtrl.push(StoryPointPage, { selectedCard: pokercard });
  }

}
