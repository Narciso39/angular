import { Component, Input } from '@angular/core';
import { RedirectLinkService } from '../../services/redirect-link.service';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  constructor(private redirectLinkService: RedirectLinkService) {}
  @Input()
  name: string = '';
  @Input()
  btnType: string = '';
  @Input()
  linkType: string = '';

  onButtonClick() {
    if (this.linkType) {
      this.redirectLinkService.redirectTo(this.linkType);
    }
  }
}
