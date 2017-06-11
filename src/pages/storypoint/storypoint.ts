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
  public settings: Settings=new Settings();
  public tapToReveal: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private settingsService: SettingsService) {
    this.pokercard = this.navParams.get('selectedCard');
  }

  ngOnInit(): void {
    this.settingsService.getSettings().then((res) => {
      this.settings = res;
      this.tapToReveal = this.settings.tapToReveal;
    });
  }

  onValueClick() {
    this.navCtrl.pop();
  }

  onShowValue() {
    this.tapToReveal = false;
  }
}
