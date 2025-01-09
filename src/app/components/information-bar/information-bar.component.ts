import { Component } from '@angular/core';
import informationBarIcon from '../../../imports/informationBar.import';
@Component({
  selector: 'app-information-bar',
  imports: [],
  templateUrl: './information-bar.component.html',
  styleUrl: './information-bar.component.css'
})
export class InformationBarComponent {
  icon = informationBarIcon.icon;
}
