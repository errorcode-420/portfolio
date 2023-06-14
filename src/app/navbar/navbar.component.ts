import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { fadeInOutAnimation } from '../animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    fadeInOutAnimation
  ]

})
export class NavbarComponent {
  
  selectedLanguage;
  
  translations: any;

  constructor(public ts: TranslationService) { 
    this.selectedLanguage = ts.getCurrentLanguage();
  }




  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.ts.switchLanguage(language)
  }

}
