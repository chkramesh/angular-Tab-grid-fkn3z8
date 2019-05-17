import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";

import { CommonAppService } from '../service/common/common-app.service';
import { User } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // userName = 'Test Form User';

  private loading: boolean = false;
  // private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  // private userResults: Observable<User[]>;
  public userResults: Observable<User[]>;
  // userResults: Observable<User[]>;

  constructor(private commonappservice: CommonAppService) { }

  ngOnInit() {
    this.getUser(1);
    this.fetchUserRecord(1);

  }

  getUser(userId:number) {
    console.log('Observable Component getUserOnLoad id = ' + userId);
    this.loading = true;
    this.commonappservice.getUser(userId).subscribe( data => {
      this.loading = false;
      this.userResults = data;
      // this.processResults();
      console.log(' 2 this.userResults = ' + this.userResults);
      // const record = this.userResults.find(obj => obj[this.id] === userId);
    });
  }

  processResults() {
    // Do some stuff with your results, this.Result is set now
    console.log(' 3 this.userResults = ' + this.userResults);
  }

  public fetchUserRecord(userId:number) {
    // Display the data retrieved from the data model to the form model.
    this.commonappservice.getRecordById(userId)
        .subscribe(data => {
            // this.fillForm(data);
            console.log(' 3 this.userResults data = ' +data.id + ' firstName = ' + data.firstName);
          },
          // (err: HttpErrorResponse) => {
          //   console.log(err.error);
          //   console.log(err.message);
          //   this.handleError(err);
          // }
          );
  }

}