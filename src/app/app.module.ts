import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { ExperienceComponent } from './experience/experience.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, // Pfad für die Startseite
  { path: 'home', component: HomeComponent }, // Pfad für die Startseite
  { path: 'about', component: AboutComponent }, // Pfad für die Startseite
  { path: 'skills', component: SkillsComponent }, // Pfad für die Startseite
  { path: 'education', component: EducationComponent }, // Pfad für die Startseite
  { path: 'experience', component: ExperienceComponent }, // Pfad für die Startseite
  { path: 'projects', component: ProjectsComponent }, // Pfad für die About-Seite
  // Weitere Routen für andere Komponenten
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
