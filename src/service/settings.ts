import { Settings } from '../model/settings';

export class SettingsService {

    public getSettings(): Settings {
        const settings = new Settings();
        settings.cardBackground = 'red';
        settings.cardValueBackground='green';
        return settings;
    }
}