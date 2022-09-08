// @ts-ignore

import EN from './assets/i18/en.json';
import FR from './assets/i18/fr.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof EN;
      fr: typeof FR;
    };
  }
}
