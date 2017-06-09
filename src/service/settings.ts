import { Settings } from '../model/settings';

export class SettingsService {
    settings: Settings;
    constructor() {
        this.settings = new Settings();
        this.settings.cardBackground = '#2d3f5b';
        this.settings.cardValueBackground = '#ffffff';
        this.settings.tapToReveal = false;
    }

    public getSettings(): Settings {
        return this.settings;
    }
}