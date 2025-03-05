import { I18n } from "i18n-js";
import en from "@src/utilities/en.json";
import fr from "@src/utilities/fr.json";

const i18n = new I18n({
  en,
  fr,
});
i18n.defaultLocale = "en";
i18n.locale = "en";

export default i18n;
