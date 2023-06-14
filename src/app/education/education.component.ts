import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { fadeInOutAnimation } from '../animations';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    fadeInOutAnimation
  ]
})
export class EducationComponent {

  constructor(public ts: TranslationService) {
    
  }
}
