import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  name = "algo";

  link() {
    console.log("algo")
  }

  @Input()
   btnType: string = "";
}
