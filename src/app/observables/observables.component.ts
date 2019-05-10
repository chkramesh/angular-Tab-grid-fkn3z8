import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";

import { SearchService } from '../service/search.service';
import { CommonAppService } from '../service/common/common-app.service';
import { SearchItem } from '../models';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchService, private commonappservice: CommonAppService) { }

  ngOnInit() {
     this.searchField = new FormControl();
     this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.itunes.search(term)),
      tap(_ => (this.loading = false))
    );

    this.getUserOnLoad(1);
  }

  // below methos is good, if we use async pipe in html 
  doSearch(term: string) {
    this.itunes.search(term);
  }

  // doSearch(term:string) {
  //   this.loading = true;
  //   this.itunes.search(term).subscribe( data => {
  //     this.loading = false;
  //     this.results = data (1)
  //   });
  // }

   getUserOnLoad(id:number) {
     console.log('Observable Component getUserOnLoad id = ' + id);
    this.loading = true;
    this.commonappservice.getUserOnLoad(id).subscribe( data => {
      this.loading = false;
      this.results = data (1)
    });
  }

}