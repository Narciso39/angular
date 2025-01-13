import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { InformationBarComponent } from '../information-bar/information-bar.component';
import { InvertedSectionComponent } from '../inverted-section/inverted-section.component';
import { CommentsBarComponent } from '../comments-bar/comments-bar.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, InformationBarComponent, InvertedSectionComponent, CommentsBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
