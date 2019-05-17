import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { FormGroup,  Validators, FormBuilder} from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";

import { CommonAppService } from '../service/common/common-app.service';
import { User } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
 
 langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  constructor() { }

  ngOnInit() {
    // this.getUser(1);
    // this.fetchUserRecord(1);

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log('Form 5 - 1 this.currentUser = ' +this.currentUser.id + ' firstName = ' + this.currentUser.firstName + ' lastName = ' +this.currentUser.lastName + ' country = ' +this.currentUser.country);
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }



  // getUser(userId:number) {
  //   console.log('Observable Component getUserOnLoad id = ' + userId);
  //   this.loading = true;
  //   this.commonappservice.getUser(userId).subscribe( data => {
  //     this.loading = false;
  //     this.userResults = data;
  //     // this.processResults();
  //     console.log(' 2 this.userResults = ' + this.userResults);
  //     // const record = this.userResults.find(obj => obj[this.id] === userId);
  //   });
  // }

  // processResults() {
  //   // Do some stuff with your results, this.Result is set now
  //   console.log(' 3 this.userResults = ' + this.userResults);
  // }

  // public fetchUserRecord(userId:number) {
  //   // Display the data retrieved from the data model to the form model.
  //   this.commonappservice.getRecordById(userId)
  //       .subscribe(data => {
  //           // this.fillForm(data);
  //           console.log(' 3 this.userResults data = ' +data.id + ' firstName = ' + data.firstName);
  //         },
  //         // (err: HttpErrorResponse) => {
  //         //   console.log(err.error);
  //         //   console.log(err.message);
  //         //   this.handleError(err);
  //         // }
  //         );
  // }

}