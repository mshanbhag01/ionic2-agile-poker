import { PokerCard } from '../../model/pokercard';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PokerCardService } from '../../service/pokercard';

@Component({
  selector: 'page-standard',
  templateUrl: 'standard.html'
})
export class StandardPage implements OnInit {
  pokercards: PokerCard[];
  constructor(public navCtrl: NavController, private pokerCardService: PokerCardService) {

  }

  ngOnInit() {
    this.pokercards = this.pokerCardService.getStandardPokerCards();
  }
}
