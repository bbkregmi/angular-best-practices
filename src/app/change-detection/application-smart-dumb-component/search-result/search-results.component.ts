import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search-result.component.html',
})
export class ResultsComponent implements OnInit {

  results: Array<string> = [];
  searchText = new FormControl('');

  constructor(
    private searchService: SearchService
  ){}

  ngOnInit() {
    this.searchText.valueChanges.pipe(
      debounceTime(500),
      switchMap(query => this.searchService.getResults(query))
    ).subscribe((results) => {
      this.results = results;
    });
  }

  resultsTitle() {
    console.log(this.searchText.value);
    return `${this.results.length} results`;
  }
}
