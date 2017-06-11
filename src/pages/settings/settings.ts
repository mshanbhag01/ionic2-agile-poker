import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../service/settings';
import { Settings } from '../../model/settings';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit {
  public cpPosition = 'bottom';
  public color = '#f2f';
  public settings: Settings=new Settings();
  constructor(public navCtrl: NavController, private settingsService: SettingsService,
    private storage: Storage) {

  }

  ngOnInit() {
    this.settingsService.getSettings().then((res) => {
    this.settings = res;
      console.log(this.settings.tapToReveal);
      console.log(this.settings.cardBackground);      
      console.log(this.settings.cardValueBackground);
    });
  }

  ngOnDestroy() {
    this.storage.set('settings', JSON.stringify(this.settings))
      .then(
      () => this.settingsService.settings = this.settings,
      error => console.error('Error storing item', error)
      );
  }
}
