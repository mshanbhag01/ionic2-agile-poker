import { Settings } from '../model/settings';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../service/settings';
import { PokerCardService } from '../service/pokercard';
import { PokerCard } from '../model/pokercard';
import { StoryPointPage } from './storypoint/storypoint';
import { OnInit, Component } from '@angular/core';

@Component({
    // selector: 'page-cards-base',
    // template: '<div></div>'
})
export abstract class CardsPageBaseComponent implements OnInit {

    public pokercards: PokerCard[];
    public settings: Settings;
    constructor(public navCtrl: NavController,
        public pokerCardService: PokerCardService,
        public settingsService: SettingsService) {

    }

    ngOnInit() {
        this.settings = this.settingsService.getSettings();
        this.pokercards = this.getPokerCards();
    }

    protected abstract getPokerCards(): PokerCard[];

    onCardSelected(pokercard: PokerCard) {
        this.navCtrl.push(StoryPointPage, { selectedCard: pokercard });
    }

}