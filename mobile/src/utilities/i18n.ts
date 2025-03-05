import { I18n } from "i18n-js";
import en from '@src/utilities/en.json';
import fr from '@src/utilities/fr.json';

const i18n = new I18n();
i18n.store(en);
i18n.store(fr);
i18n.defaultLocale = 'en';
i18n.locale = 'en';