import { StoryPointPage } from '../pages/storypoint/storypoint';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StandardPage } from '../pages/standard/standard';
import { FibonacciPage } from '../pages/fibonacci/fibonacci';
import { TshirtPage } from '../pages/tshirt/tshirt';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PokerCardService } from '../service/pokercard';
import { SettingsService } from '../service/settings';
import {ColorPickerModule} from 'ngx-color-picker';
@NgModule({
  declarations: [
    MyApp,
    StandardPage,
    FibonacciPage,
    TshirtPage,
    SettingsPage,
    StoryPointPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ColorPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StandardPage,
    FibonacciPage,
    TshirtPage,
    SettingsPage,
    StoryPointPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PokerCardService,
    SettingsService
  ]
})
export class AppModule { }
