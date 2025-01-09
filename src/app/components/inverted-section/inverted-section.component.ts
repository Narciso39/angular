import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import heroImports from '../../../imports/hero.imports';
@Component({
  selector: 'app-inverted-section',
  imports: [ButtonComponent],
  templateUrl: './inverted-section.component.html',
  styleUrl: './inverted-section.component.css',
})
export class InvertedSectionComponent {
  @Input()
  inverted: string = '';

  img = heroImports.heroImg;
}
