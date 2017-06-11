import { Settings } from '../model/settings';
import { Storage } from '@ionic/storage';

export class SettingsService {
    settings: Settings;
    storage: Storage;
    constructor() {

        // storage.ready().then(() => {
        //         storage.get('settings').then((json) => {
        //             if (json) {
        //                 this.settings = JSON.parse(json);
        //             }
        //         });
        // }, error => {
        // this.settings = new Settings();
        // this.settings.cardBackground = '#2d3f5b';
        // this.settings.cardValueBackground = '#ffffff';
        // this.settings.tapToReveal = false;
        // });
    }

    public getSettings(): Promise<Settings> {
        if (this.settings === undefined || this.settings === null) {
            try {
                return this.storage.get('settings').then((json) => {
                    if (json) {
                        this.settings = JSON.parse(json);
                    } else {
                        this.settings = new Settings();
                        this.settings.cardBackground = '#2d3f5b';
                        this.settings.cardValueBackground = '#ffffff';
                        this.settings.tapToReveal = false;
                    }
                    return this.settings;
                });
            } catch (error) {
                this.settings = new Settings();
                this.settings.cardBackground = '#2d3f5b';
                this.settings.cardValueBackground = '#ffffff';
                this.settings.tapToReveal = false;
            }
        } else {
            return new Promise((resolve, reject) => resolve(this.settings));
        }

        //return this.settings;
    }
}