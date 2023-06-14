import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { deTranslations } from '../assets/translations/de-translations'
import { enTranslations } from '../assets/translations/en-translations'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations: any; // Das ist das Objekt, das die Übersetzungen enthält
  private currentLanguage: string = 'en'; // Standardmäßig Englisch verwenden

  constructor() {
    this.setTranslations();
  }

  
  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.setTranslations();
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







