import { PokerCard } from '../../model/pokercard';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Settings } from '../../model/settings';
import { SettingsService } from '../../service/settings';

@Component({
  selector: 'page-storypoint',
  templateUrl: 'storypoint.html'
})
export class StoryPointPage implements OnInit {

  public pokercard: PokerCard;
  public settings: Settings;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private settingsService: SettingsService) {
    this.pokercard = this.navParams.get('selectedCard');
  }

  ngOnInit(): void {
    this.settings = this.settingsService.getSettings();
  }

  onValueClick() {
    this.navCtrl.pop();
  }
}
