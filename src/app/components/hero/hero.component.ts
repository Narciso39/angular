import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import heroImports from '../../../imports/hero.imports';


@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  img = heroImports.heroImg;
}
