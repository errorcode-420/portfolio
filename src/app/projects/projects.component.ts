import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { fadeInOutAnimation } from '../animations';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    fadeInOutAnimation,
  ]

})
export class ProjectsComponent {
  
  showOshopText: boolean = false;

  constructor(public ts: TranslationService) {
    
  }

  toggleOshopText() {
    this.showOshopText = !this.showOshopText;
  }
}
