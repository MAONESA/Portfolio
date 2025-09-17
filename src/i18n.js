import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";

// Configuración de i18next
i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: "es", // idioma por defecto
  fallbackLng: "en", // idioma alternativo
  interpolation: {
    escapeValue: false, // react ya escapa por defecto
  },
});

export default i18n;
