import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(public ts: TranslationService, private router: Router) {
    
  }

  ngOnInit() {
    this.router.navigateByUrl('/home');

    
}
}