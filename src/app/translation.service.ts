import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any;
  private selectedLanguage
  private componentFactoryResolver: ComponentFactoryResolver;

  constructor(private http: HttpClient, private injector: Injector) { 
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'de';
    this.componentFactoryResolver = injector.get(ComponentFactoryResolver);

    this.loadTranslations(this.selectedLanguage).subscribe(translations => {
      this.setTranslations(translations);
      this.translations = translations;

    });
  }  

  loadTranslations(language: string): Observable<any> {
    const url = `assets/json/${language}-translations.json`;
    return this.http.get(url);
  }

  setTranslations(translations: any) {
    this.translations = translations;
  }

  getJson(key: string): string {
    const component = this.getCallerComponentName();
    const fullKey = component + "." + key
    //entfernen
    console.log(fullKey)
    const translationKeys = fullKey.split('.');
    let translation = this.translations;
    if(!translation) return '';
    for (const translationKey of translationKeys) {
      console.log("translationKey", translationKey)
      console.log("translation", translation)

      translation = translation[translationKey];
      if (!translation) {
        break;
      }
    }
    return translation || fullKey;
  }
  
  
  reloadPage() {
    window.location.reload();
  }

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    this.reloadPage();
  }

  getSelectedLanguage() {
    return this.selectedLanguage;
  }

  getCallerComponentName(): string {
    const stacktrace = new Error().stack;
    if(!stacktrace) return '';
    const callerLine = stacktrace.split('\n')[3]; // Die Zeile, die die aufrufende Komponente enthält
    const componentNameRegex = /at\s+(\S+)\s+\(/;
    const matches = componentNameRegex.exec(callerLine);
    if (matches && matches.length > 1) {
      return matches[1].slice(0, -18).toLowerCase();
    }
    return '';
  }

}
