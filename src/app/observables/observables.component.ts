import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";

import { SearchService } from '../service/search.service';
import { CommonAppService } from '../service/common/common-app.service';
import { SearchItem } from '../models';
import { User } from '../models';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  // private userResults: Observable<User[]>;
  public userResults: Observable<User[]>;
  // userResults: Observable<User[]>;

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
    
    this.getUser(1);
    //this.getUserOnLoad(1);
    // this.userResults = this.getUser(1);
    // this.userResults = this.getUserOnLoad(1);
    console.log(' 1 this.userResults = ' + this.userResults);
  }

  // below methos is good, if we use async pipe in html 
  doSearch(term: string) {
    this.itunes.search(term);
  }

  // doSearch(term:string) {
  //   this.loading = true;
  //   this.itunes.search(term).subscribe( data => {
  //     this.loading = false;
  //     this.results = data
  //   });
  // }

   getUser(userId:number) {
    console.log('Observable Component getUserOnLoad id = ' + userId);
    this.loading = true;
    this.commonappservice.getUser(userId).subscribe( data => {
      this.loading = false;
      this.userResults = data;
      this.processResults();
      console.log(' 2 this.userResults = ' + this.userResults);

      console.log('HTTP response', data);
        console.log('HTTP response : Headers', data.headers);
        console.log('HTTP response : status', data.status);
        console.log('HTTP response : url', data.body);
        console.log('HTTP response : body', data.json());
    });
  }

  processResults() {
    // Do some stuff with your results, this.Result is set now

    console.log(' 3 this.userResults = ' + this.userResults);

  }

   getUserOnLoad(userId:number) {
     console.log('Observable Component getUserOnLoad userId = ' + userId);
    this.loading = true;
    // this.commonappservice.getUserOnLoad(userId).subscribe( data => {
    this.commonappservice.getUserOnLoad(userId).subscribe( data => {
      console.log('Observable Component data = ' + data);
      this.loading = false;
      this.userResults = data;
    });
  }

}