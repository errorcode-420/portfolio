import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { fadeInOutAnimation } from '../animations';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    fadeInOutAnimation
  ]

})
export class AboutComponent {

  constructor(public ts: TranslationService) { 
    const browserLanguage = navigator.language;
    console.log("browserLanguage");
    console.log(browserLanguage);

  }

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: false },
    { viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true }
  ];

}