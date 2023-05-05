import { Component } from '@angular/core';
import { PAGES } from 'src/app/pages';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  pages = PAGES;

}
