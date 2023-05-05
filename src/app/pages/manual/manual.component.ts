import { Component } from '@angular/core';
import { Page } from 'src/app/util/page';
import { MANUAL_PAGES } from './manualPages';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent {

  selectedPageId: number = 0;
  manualPages: Page[] = MANUAL_PAGES;

  constructor() { }

  selectPage(id: number) {
    this.selectedPageId = id;
  }

  nextPage() {
    this.selectedPageId++;
  }

  previousPage() {
    this.selectedPageId--;
  }

}
