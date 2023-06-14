import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { fadeInOutAnimation } from '../animations';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    fadeInOutAnimation
  ]

})
export class ExperienceComponent {

  constructor(public ts: TranslationService) {
    
  }
}
