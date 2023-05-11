import { Component } from '@angular/core';
import { Page } from 'src/app/util/page';
import { MANUAL_PAGES } from './manualPages';
import { HighlightService } from 'src/app/util/prism.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent {

  selectedPageId: number = 0;
  manualPages: Page[] = MANUAL_PAGES;
  highlighted: boolean = false;

  constructor(
    private highlightService: HighlightService) {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
    this.highlighted = true;
  }

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
