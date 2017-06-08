import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../service/settings';
import { Settings } from '../../model/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public cpPosition = 'bottom';
  public color = '#f2f';
  public settings: Settings;
  constructor(public navCtrl: NavController, private SettingsService: SettingsService) {
    this.settings = this.SettingsService.getSettings();
  }

}
