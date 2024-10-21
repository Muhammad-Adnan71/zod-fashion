import { Locale, i18n } from "../i18n.config";


export const getLocaleFromServer = (lang: Locale) =>
    i18n.locales.includes(lang) ? lang : i18n.defaultLocale;