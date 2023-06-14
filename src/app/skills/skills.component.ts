import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { fadeInOutAnimation } from '../animations';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    fadeInOutAnimation,
  ]

})
export class SkillsComponent {
  constructor(public ts: TranslationService) {
    
  }
}  

