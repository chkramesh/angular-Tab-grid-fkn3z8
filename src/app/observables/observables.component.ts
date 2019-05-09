import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // private loading: boolean = false;
  // private results: Observable<SearchItem[]>;
  // private searchField: FormControl;

  // constructor(private itunes: SearchService) {}

  // ngOnInit() {
  //   this.searchField = new FormControl();
  //   this.results = this.searchField.valueChanges.pipe(
  //     debounceTime(400),
  //     distinctUntilChanged(),
  //     tap(_ => (this.loading = true)),
  //     switchMap(term => this.itunes.search(term)),
  //     tap(_ => (this.loading = false))
  //   );
  // }

  // doSearch(term: string) {
  //   this.itunes.search(term);
  // }

}