import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { InformationBarComponent } from '../information-bar/information-bar.component';
import { InvertedSectionComponent } from '../inverted-section/inverted-section.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, InformationBarComponent, InvertedSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
