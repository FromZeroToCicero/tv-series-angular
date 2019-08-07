import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './firstpage.component.html',
    styleUrls: ['./firstpage.component.css']
})

export class FirstPageComponent {
    constructor(private router: Router) {}

    redirectToSeries() {
      this.router.navigate(['series/action']);
    }
}
