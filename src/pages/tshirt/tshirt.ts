import { PokerCard } from '../../model/pokercard';
import { Component } from '@angular/core';
import { CardsPageBaseComponent } from '../cards.base';
@Component({
  selector: 'page-tshirt',
  templateUrl: 'tshirt.html'
})
export class TshirtPage extends CardsPageBaseComponent {
  protected getPokerCards(): PokerCard[] {
    return this.pokerCardService.getTShirtPokerCards();
  }
}
