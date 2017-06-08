import { PokerCard } from '../../model/pokercard';
import { Component } from '@angular/core';
import { CardsPageBaseComponent } from '../cards.base';

@Component({
  selector: 'page-standard',
  templateUrl: 'standard.html'
})
export class StandardPage extends CardsPageBaseComponent {
   protected getPokerCards(): PokerCard[] {
    return this.pokerCardService.getStandardPokerCards();
  }
}
