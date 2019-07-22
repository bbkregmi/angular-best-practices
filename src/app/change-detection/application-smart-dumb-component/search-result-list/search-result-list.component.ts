import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultListComponent {
  @Input() results: Array<string>[];

  resultsTitle() {
    console.log('Hello');
    return `${this.results.length} results`;
  }
}