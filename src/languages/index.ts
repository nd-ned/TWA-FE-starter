import * as enLocale from "./en.json";
import * as ruLocale from "./ru.json";

export enum LanguageCode {
  en = "en",
  ru = "ru",
}

const languages = {
  [LanguageCode.en]: enLocale,
  [LanguageCode.ru]: ruLocale,
};

export default languages;
