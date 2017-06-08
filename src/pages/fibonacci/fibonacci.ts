import { PokerCard } from '../../model/pokercard';
import { Component } from '@angular/core';
import { CardsPageBaseComponent } from '../cards.base';
@Component({
  selector: 'page-fibonacci',
  templateUrl: 'fibonacci.html'
})
export class FibonacciPage extends CardsPageBaseComponent {
  
  protected getPokerCards(): PokerCard[] {
    return this.pokerCardService.getFibonacciPokerCards();
  }

}
