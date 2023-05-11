import { Component } from '@angular/core';
import { PAGES } from 'src/app/util/pages';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  pages = PAGES;

}
