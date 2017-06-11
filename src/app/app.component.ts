import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StandardPage } from '../pages/standard/standard';
import { FibonacciPage } from '../pages/fibonacci/fibonacci';
import { TshirtPage } from '../pages/tshirt/tshirt';

import { SettingsPage } from '../pages/settings/settings';
import { SettingsService } from '../service/settings';
import {Storage} from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StandardPage;

  pages: Array<{ title: string, icon: any, component: any }>;

  settingPage: { title: string, icon: any, component: any };

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private settingsService: SettingsService,
    private storage: Storage) {
    this.initializeApp();
    this.settingsService.storage = this.storage;
    this.settingPage = { title: 'Settings', icon: 'settings', component: SettingsPage };
    this.pages = [
      { title: 'Standard', icon: 'keypad', component: StandardPage },
      { title: 'Fibonacci', icon: 'funnel', component: FibonacciPage },
      { title: 'T-Shirt', icon: 'shirt', component: TshirtPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
