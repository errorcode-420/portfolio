import { Injectable } from '@angular/core';
import { deTranslations } from '../assets/translations/de-translations'
import { enTranslations } from '../assets/translations/en-translations'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations: any; // Das ist das Objekt, das die Übersetzungen enthält
  private currentLanguage: string = 'de'; // Standardmäßig Englisch verwenden

  constructor() {
    this.setLanguageFromBrowser();
    this.setTranslations();
  }

  
  private setLanguageFromBrowser(): void {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    var browserLanguage = navigator.language.split('-')[0];

    if(selectedLanguage)
    {
      this.currentLanguage = selectedLanguage;
      return;
    }
    if(browserLanguage == 'de'||'en')
    {
      this.currentLanguage = browserLanguage;
      return;
    }
    this.currentLanguage = 'en'   
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    location.reload();

  } 


  getCurrentLanguage() {
    return this.currentLanguage;
  }

  private setTranslations(): void {
    if (this.currentLanguage === 'en') {
      this.translations = enTranslations;
    } else if (this.currentLanguage === 'de') {
      this.translations = deTranslations;
    }
  }

  getJson(key: string): string {
    const keys = key.split('.');
    let value = this.translations;
    for (const k of keys) {
      value = value[k];
      if (!value) {
        break;
      }
    }
    return value || key;
  }
}







