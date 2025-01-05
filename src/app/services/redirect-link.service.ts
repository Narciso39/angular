import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectLinkService {
  constructor(private router: Router) { }

  redirectTo(link: string) {
    this.router.navigate([link]);
  }
}
