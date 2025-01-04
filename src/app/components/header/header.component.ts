import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
