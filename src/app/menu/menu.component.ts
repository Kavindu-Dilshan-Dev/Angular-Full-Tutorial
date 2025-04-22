import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

    constructor(
      private router: Router
    ){

    }
    navigateToAbout() {
      this.router.navigate(["about"]);
    }
}


